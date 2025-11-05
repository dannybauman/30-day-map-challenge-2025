# Hero Image Implementation Approaches

## Problem Summary
Add a desktop screenshot to the hero section (right side) without changing the hero's original height. The hero should remain exactly: content height + 60px top padding + 60px bottom padding.

## Current Structure
```html
<div class="hero">
    <div class="container">
        <h1>Day 1: Points</h1>
        <p class="lead">Global Earthquakes - Last 30 Days</p>
        <p><strong>Date:</strong> November 1, 2025 | <strong>By:</strong> Danny Bauman</p>
    </div>
</div>
```

```css
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 0; margin-bottom: 40px; }
```

## Approach 1: Absolute Positioning (Recommended)

### Concept
Position the image absolutely within the hero, removing it from document flow. The hero height is determined solely by the text content + padding, and the image is overlaid on the right side.

### HTML Structure
```html
<div class="hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <h1>Day 1: Points</h1>
                <p class="lead">Global Earthquakes - Last 30 Days</p>
                <p><strong>Date:</strong> November 1, 2025 | <strong>By:</strong> Danny Bauman</p>
            </div>
            <div class="col-lg-5 hero-image-wrapper">
                <img src="path/to/winning-platform-screenshot.png" alt="Winning platform screenshot" class="hero-image">
            </div>
        </div>
    </div>
</div>
```

### CSS
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 0;  /* Original padding maintained */
    margin-bottom: 40px;
    position: relative;  /* Establish positioning context */
    overflow: hidden;    /* Clip image if it extends beyond */
}

.hero .container {
    position: relative;  /* Positioning context for image */
}

.hero .row {
    margin: 0;  /* Remove Bootstrap default margins */
}

.hero .col-lg-7 {
    position: relative;  /* Ensure text stays above image */
    z-index: 2;         /* Text above image */
}

.hero-image-wrapper {
    position: absolute;  /* Remove from flow */
    top: 0;
    right: 0;
    bottom: 0;
    width: 42%;  /* Approximate col-lg-5 width */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    z-index: 1;  /* Behind text */
}

.hero-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: 100%;
    object-fit: contain;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 991px) {
    .hero-image-wrapper {
        position: relative;
        width: 100%;
        height: 300px;  /* Fixed height on mobile */
        margin-top: 30px;
    }

    .hero-image {
        height: 100%;
        width: auto;
        max-width: 100%;
    }
}
```

### Pros
- ✅ Image doesn't affect document flow, so height stays exactly the same
- ✅ Simple implementation
- ✅ Works with existing Bootstrap structure
- ✅ Responsive with media queries

### Cons
- ⚠️ Image column is absolutely positioned, so it doesn't participate in Bootstrap's responsive grid naturally
- ⚠️ Need to manually calculate width for desktop (though 42% approximates col-lg-5)

---

## Approach 2: CSS Grid with Explicit Height

### Concept
Use CSS Grid instead of Bootstrap's flex-based columns. Set explicit height on the grid container based on content, and constrain the image to match that height.

### HTML Structure
```html
<div class="hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1>Day 1: Points</h1>
                <p class="lead">Global Earthquakes - Last 30 Days</p>
                <p><strong>Date:</strong> November 1, 2025 | <strong>By:</strong> Danny Bauman</p>
            </div>
            <div class="hero-image-container">
                <img src="path/to/winning-platform-screenshot.png" alt="Winning platform screenshot" class="hero-image">
            </div>
        </div>
    </div>
</div>
```

### CSS
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 0;  /* Original padding maintained */
    margin-bottom: 40px;
}

.hero .container {
    padding: 0 15px;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    align-items: stretch;
    min-height: 0;  /* Important: prevents grid from expanding */
}

@media (min-width: 992px) {
    .hero-grid {
        grid-template-columns: 58.333333% 41.666667%;  /* Bootstrap col-lg-7 and col-lg-5 widths */
    }
}

.hero-content {
    padding: 60px 30px 60px 15px;  /* Match original padding */
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 0;  /* Prevent expansion */
}

.hero-image-container {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;  /* Clip if needed */
    min-height: 0;    /* Important: prevents expansion */
    max-height: 100%;  /* Constrain to grid row height */
}

.hero-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: 100%;
    object-fit: contain;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 991px) {
    .hero-content {
        padding: 60px 15px;
    }

    .hero-image-container {
        height: 300px;  /* Fixed height on mobile */
        margin-top: 0;
    }
}
```

### Pros
- ✅ Uses modern CSS Grid
- ✅ More semantic structure
- ✅ Image column is part of the grid naturally

### Cons
- ⚠️ Grid might still expand if not carefully constrained
- ⚠️ Need to ensure `min-height: 0` on grid items to prevent expansion
- ⚠️ More complex than Approach 1

---

## Recommendation

**Approach 1 (Absolute Positioning)** is recommended because:
1. It's simpler and more reliable
2. The image is completely removed from document flow, so it cannot affect height
3. Easier to debug and maintain
4. Works well with existing Bootstrap structure

The key insight is that by removing the image from document flow, we ensure the hero height is determined solely by the text content + padding, exactly as it was originally.

---

## Key Differences from Previous Attempts

1. **Absolute positioning**: Image doesn't participate in flexbox height calculation
2. **Overflow hidden**: Prevents image from visually extending beyond hero
3. **Z-index layering**: Ensures text stays above image
4. **Explicit container positioning**: Hero container is `position: relative` to establish context

