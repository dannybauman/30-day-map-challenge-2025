(() => {
    const script = document.currentScript;
    if (!script) {
        return;
    }

    const currentDay = script.dataset.day || '';
    const targetSelector = script.dataset.target || '[data-day-nav]';
    const manifestPath = script.dataset.manifest || 'days.json';
    const basePath = script.dataset.basePath || './';

    const container = document.querySelector(targetSelector);
    if (!container) {
        return;
    }

    const buildUrl = (relativePath) => {
        const baseUrl = new URL(basePath, document.baseURI);
        return new URL(relativePath, baseUrl).toString();
    };

    const handleError = (message, error) => {
        console.error('[DayNavigation]', message, error || '');
        container.innerHTML = '<div class="alert alert-warning mb-0">Unable to load day navigation right now.</div>';
    };

    const manifestUrl = new URL(manifestPath, document.baseURI).toString();

    fetch(manifestUrl, { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then((payload) => {
            const days = Array.isArray(payload.days) ? payload.days : payload;
            if (!Array.isArray(days) || days.length === 0) {
                handleError('Manifest does not contain any days.');
                return;
            }

            const isTopNav = targetSelector === '[data-day-nav-top]';
            const daysById = days.reduce((acc, day) => {
                if (day && day.id) {
                    acc[day.id] = day;
                }
                return acc;
            }, {});

            const orderedIds = days.map((day) => day.id);
            const currentIndex = orderedIds.indexOf(currentDay);
            const prevId = currentIndex > 0 ? orderedIds[currentIndex - 1] : null;
            const nextId = currentIndex >= 0 && currentIndex < orderedIds.length - 1 ? orderedIds[currentIndex + 1] : null;

            const createNavButton = (label, dayId) => {
                const button = document.createElement('a');
                button.className = 'btn btn-outline-primary btn-sm';
                button.textContent = label;
                if (dayId && daysById[dayId]) {
                    button.href = buildUrl(daysById[dayId].relativeUrl);
                } else {
                    button.classList.add('disabled');
                    button.setAttribute('aria-disabled', 'true');
                    button.tabIndex = -1;
                }
                return button;
            };

            if (isTopNav) {
                // Compact top navigation bar
                const navBar = document.createElement('nav');
                navBar.className = 'day-nav-top sticky-top bg-white shadow-sm';
                navBar.style.zIndex = '1030';
                navBar.style.padding = '8px 0';

                const navContainer = document.createElement('div');
                navContainer.className = 'container';
                navBar.appendChild(navContainer);

                const navWrapper = document.createElement('div');
                navWrapper.className = 'd-flex align-items-center justify-content-between gap-2 flex-wrap';
                navContainer.appendChild(navWrapper);

                // Left: Previous/Next buttons
                const navButtons = document.createElement('div');
                navButtons.className = 'd-flex gap-2';
                navButtons.appendChild(createNavButton('← Prev', prevId));
                navButtons.appendChild(createNavButton('Next →', nextId));
                navWrapper.appendChild(navButtons);

                // Right: Day selector dropdown (spacer div to push it right)
                const spacer = document.createElement('div');
                spacer.className = 'flex-grow-1';
                navWrapper.appendChild(spacer);
                const selectWrapper = document.createElement('div');
                selectWrapper.style.minWidth = '200px';
                const select = document.createElement('select');
                select.className = 'form-select form-select-sm';
                select.setAttribute('aria-label', 'Select map day');
                selectWrapper.appendChild(select);

                const placeholderOption = document.createElement('option');
                placeholderOption.value = '';
                placeholderOption.textContent = 'Jump to day...';
                placeholderOption.disabled = true;
                select.appendChild(placeholderOption);

                days.forEach((day) => {
                    if (!day || !day.id || !day.relativeUrl) {
                        return;
                    }
                    const option = document.createElement('option');
                    option.value = buildUrl(day.relativeUrl);
                    option.textContent = day.title || day.id;
                    if (day.id === currentDay) {
                        option.selected = true;
                        placeholderOption.disabled = true;
                    }
                    select.appendChild(option);
                });

                select.addEventListener('change', (event) => {
                    const url = event.target.value;
                    if (url) {
                        window.location.href = url;
                    }
                });

                navWrapper.appendChild(selectWrapper);

                container.innerHTML = '';
                container.appendChild(navBar);
            } else {
                // Full bottom navigation card (existing behavior)
                const card = document.createElement('div');
                card.className = 'card shadow-sm';

                const body = document.createElement('div');
                body.className = 'card-body';
                card.appendChild(body);

                const heading = document.createElement('h5');
                heading.className = 'card-title';
                heading.textContent = '#30DayMapChallenge Navigator';
                body.appendChild(heading);

                const description = document.createElement('p');
                description.className = 'card-text text-muted';
                description.textContent = 'Jump to another day or review previous pages.';
                body.appendChild(description);

                const formWrapper = document.createElement('div');
                formWrapper.className = 'row align-items-center g-2';
                body.appendChild(formWrapper);

                const selectCol = document.createElement('div');
                selectCol.className = 'col-lg-8';
                formWrapper.appendChild(selectCol);

                const select = document.createElement('select');
                select.className = 'form-select';
                select.setAttribute('aria-label', 'Select map day');
                selectCol.appendChild(select);

                const placeholderOption = document.createElement('option');
                placeholderOption.value = '';
                placeholderOption.textContent = 'Select a day...';
                placeholderOption.disabled = true;
                select.appendChild(placeholderOption);

                days.forEach((day) => {
                    if (!day || !day.id || !day.relativeUrl) {
                        return;
                    }
                    const option = document.createElement('option');
                    option.value = buildUrl(day.relativeUrl);
                    option.textContent = day.title || day.id;
                    if (day.id === currentDay) {
                        option.selected = true;
                        placeholderOption.disabled = true;
                    }
                    select.appendChild(option);
                });

                if (!select.value) {
                    select.selectedIndex = 0;
                }

                select.addEventListener('change', (event) => {
                    const url = event.target.value;
                    if (url) {
                        window.location.href = url;
                    }
                });

                const buttonsCol = document.createElement('div');
                buttonsCol.className = 'col-lg-4 d-flex justify-content-lg-end gap-2';
                formWrapper.appendChild(buttonsCol);

                buttonsCol.appendChild(createNavButton('← Previous', prevId));
                buttonsCol.appendChild(createNavButton('Next →', nextId));

                const list = document.createElement('ul');
                list.className = 'list-group list-group-flush mt-3';
                days.forEach((day) => {
                    if (!day || !day.id || !day.relativeUrl) {
                        return;
                    }
                    const item = document.createElement('li');
                    item.className = 'list-group-item d-flex justify-content-between align-items-center';

                    const titleWrapper = document.createElement('div');
                    titleWrapper.innerHTML = `<strong>${day.title || day.id}</strong>`;
                    if (day.theme) {
                        const theme = document.createElement('div');
                        theme.className = 'small text-muted';
                        theme.textContent = day.theme;
                        titleWrapper.appendChild(theme);
                    }
                    item.appendChild(titleWrapper);

                    if (day.status) {
                        const badge = document.createElement('span');
                        badge.className = 'badge bg-secondary';
                        badge.textContent = day.status;
                        item.appendChild(badge);
                    }

                    const targetUrl = buildUrl(day.relativeUrl);
                    item.addEventListener('click', () => {
                        window.location.href = targetUrl;
                    });
                    item.tabIndex = 0;
                    item.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            window.location.href = targetUrl;
                        }
                    });
                    item.style.cursor = 'pointer';

                    list.appendChild(item);
                });

                body.appendChild(list);

                container.innerHTML = '';
                container.appendChild(card);
            }
        })
        .catch((error) => {
            handleError('Failed to load day navigation.', error);
        });
})();
