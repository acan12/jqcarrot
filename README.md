jQuery JqCarrot Rating Plugin
========================

Minimal, light-weight jQuery ratings.

How to use
----------

Sample HTML document:

```
<div class="rating-container">
  <a href="#" class="bar level-1" data-original-title="1.0">&nbsp;</a>
  <a href="#" class="bar level-2" data-original-title="1.5">&nbsp;</a>
  <a href="#" class="bar level-3" data-original-title="2.0">&nbsp;</a>
  <a href="#" class="bar level-4" data-original-title="2.5">&nbsp;</a>
  <a href="#" class="bar level-5" data-original-title="3.0">&nbsp;</a>
  <a href="#" class="bar level-6" data-original-title="3.5">&nbsp;</a>
  <a href="#" class="bar level-7" data-original-title="4.0">&nbsp;</a>
  <a href="#" class="bar level-8" data-original-title="4.5">&nbsp;</a>
  <a href="#" class="bar level-9" data-original-title="5.0">&nbsp;</a>
</div>
```

$(".bar").cRateHover();

Paramaters:
- class_name : rating element class name
- data_rating_values    : array of rating values  // ['1.0','2.0','3.0','4.0','5.0','6.0','7.0','8.0','9.0']
- data_rating_colors    : array of rating colors in hex color  // ['#CB202D', '#DE1D0F', '#FF7800']
- hover_callback        : callback when mouse over the element area
- mouseleave_callback   : callback when mouse out the element area
- click_callback        : callback when mouse click the element area


Have Fun !
