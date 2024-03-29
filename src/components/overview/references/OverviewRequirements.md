# <input type="checkbox" > Overview

The Overview module will be the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:

1. Image gallery
2. Product information
3. Style selector
4. Add to cart

This component will **guide the customer** through **selecting a specific style** and **size** to add to their cart. As such, portions of the Overview module, such as the image gallery and cart selection, will be **specific to a SKU chosen** as opposed to the overarching product.

## <input type="checkbox" checked> Product Information

General information about the product will be displayed at the top of the Overview. The following information will show:
- <input type="checkbox" checked> **Star Rating (# of Reviews)**
  - <input type="checkbox" checked> Each product has an average rating based on its reviews. The average rating of the product will be represented by an array of solid or outlined stars, where the number of solid stars represents the review score. A total of 5 stars should always appear. The number of stars filled in should correspond to the average score.

    <input type="checkbox" checked> The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

    <input type="checkbox" checked> Next to the star rating, a link stating “Read all [#] reviews” will show. The total number of reviews should be inserted in place of [#]. Clicking this link should scroll the page to the Ratings & Reviews module described in section 1.2.

    <input type="checkbox" checked> If there are no reviews, this entire section should be hidden.

- <input type="checkbox" checked> **Product Category**

- <input type="checkbox" checked> **Product Title**
- <input type="checkbox" checked> **Price**

  - <input type="checkbox" checked> The price is not actually derived from the product, but the style currently selected. It should update dynamically with the user’s updates to style selected. A default style will be designated for each product. This style should appear if no further selection has been made.

    <input type="checkbox" checked> The price may be on sale. If the SKU is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.

- <input type="checkbox" checked> **Product Overview**

  - <input type="checkbox" checked> This free form text field may exist on some items. If it is available it should be displayed.

- <input type="checkbox" checked> **Share on Social media**
  - <input type="checkbox" checked> Below the product information, buttons should provide the ability to share this product on popular social media platforms. This includes:
    - <input type="checkbox" checked> Facebook
    - <input type="checkbox" checked> Twitter
    - <input type="checkbox" checked> Pinterest

## <input type="checkbox" checked> Style Selector

Below the product information, the user should be presented all the styles of the product and have the ability to toggle between them.

- <input type="checkbox" checked> Each style should be displayed as a thumbnail.
- <input type="checkbox" checked> All styles should display for the current product at all times. There is no limit to the number of styles a product can have. The thumbnails should appear in rows of 4.
- <input type="checkbox" checked> The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.
  - <input type="checkbox" checked> Additionally, the title for that style should appear typed out in full above the thumbnail list.
- <input type="checkbox" checked> A user will be able to change the selected style by clicking on the thumbnail displaying that style. Clicking on the thumbnail for the currently selected style will have no impact.
- <input type="checkbox" checked> By default, the style selected will be the first in the list.
- <input type="checkbox" checked> A product will always have at least one style.
- <input type="checkbox" checked> Only one style can be selected at a time.
- <input type="checkbox" checked> A style must be selected at all times.

## <input type="checkbox" checked> Add to Cart

Below the style selector, two dropdowns should allow the user to select the size and quantity of the item to add to their cart. The options available within these dropdowns will vary based on the selected product style.

- <input type="checkbox" checked> **1.1.3.1. Size Selector**

  - <input type="checkbox" checked> The first dropdown will list all of the available sizes for the currently selected style.

  - <input type="checkbox" checked> Only sizes that are currently in stock for the style selected should be listed.
  - <input type="checkbox" checked> Sizes not available should not appear within the list.
  - <input type="checkbox" checked> If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”.
  - <input type="checkbox" checked> When collapsed, the dropdown should show the currently selected size.
  - <input type="checkbox" checked > By default, the dropdown should show “Select Size”.

- <input type="checkbox" checked> **1.1.3.2. Quantity Selector**

  - <input type="checkbox" checked> The second dropdown will allow the user to select a quantity of the current style and size to add to their cart.
    The options in this dropdown will be a sequence of integers ranging from 1 to the maximum. The maximum selection will be capped by either the quantity of this style and size in stock, or a hard limit of 15. For example, if the SKU for the selected product style and size has 4 units left in stock, the dropdown will allow choice of 1, 2, 3 or 4. However if there are 30 units in stock, the dropdown will only present from 1 to 15.

  - <input type="checkbox" checked> If the size has not been selected, then the quantity dropdown will display ‘-’ and the dropdown will be disabled.
  - <input type="checkbox" checked> Once a size has been selected, the dropdown should default to 1.

- <input type="checkbox" checked> **1.1.3.3. Add to cart**
  - <input type="checkbox" checked> A button labeled “Add to Cart” will appear below the size and quantity dropdowns. This button will be used to place the style, size and quantity of the product selected into the user’s cart.
  - <input type="checkbox" checked> Depending on the current selection in the size and quantity dropdowns, this button will have differing functionality.
    - <input type="checkbox" checked> If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.
    - <input type="checkbox" checked> If there is no stock: This button should be hidden
    - <input type="checkbox" checked> If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.

## <input type="checkbox"> Image Gallery

The largest piece of the Overview module will be a photo gallery showing images of the product. The photos presented in this gallery will be specific to the currently selected product style. Each time a new style is chosen, the gallery will update to show photos corresponding to the new style. Each style will have a set of images associated with it. The gallery will allow customers to browse between and zoom in on these photos.

The gallery will be viewable in two states. A default collapsed view, and an expanded view.

- <input type="checkbox" > **1.1.4.1. Default View**

  - <input type="checkbox" checked> The default view of the image gallery will be a single main image, overlaid by the list of thumbnail images.
  - <input type="checkbox" checked> By default, the first image in the set will be displayed as the main image. This image will match the smaller thumbnail image shown first.
  - <input type="checkbox" checked> When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style.
  - <input type="checkbox" checked> Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
  - <input type="checkbox" checked> The thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection.
  - <input type="checkbox" checked> Clicking on the currently selected thumbnail will have no further effect.
  - <input type="checkbox" checked> Up to 7 thumbnail images will be displayed at a given time in the list.
  - <input type="checkbox" checked> If more than 7 images are in the set for the style selected, the user should be able to scroll forward and backwards through the thumbnails. An arrow button pointing either direction should allow the customer to scroll through the remaining thumbnails in either direction.
  - <input type="checkbox" checked> Customers should also be able to change to the next or previous image in the set using forward and backwards arrow buttons appearing near the right and left edges of the image, respectively. Upon clicking the right or left arrow, the main image and the thumbnail highlighted should update.
  - <input type="checkbox" checked> If upon navigating to the previous or next image using the arrows, the thumbnail corresponding to the now selected image is no longer visible, then the thumbnail list should scroll similarly such that the newly selected thumbnail is visible.
  - <input type="checkbox" > If the user hovers over the main image anywhere other than the thumbnails, the left arrow, or the right arrow, the mouse icon should change to show a magnifying glass. If the user clicks on the image, the image gallery should change to the expanded view.
  - <input type="checkbox" checked> If the first image is selected, the left arrow should not appear. Similarly, if the last image is selected, the right arrow should not appear.

- <input type="checkbox"> **1.1.4.2. Expanded View**
  - <input type="checkbox"> The expanded view of the image gallery will overlay the rest of the item detail page. Much of the same functionality on the default view will also be available on the expanded view.
  - <input type="checkbox"> The expanded view will also primarily consist of a main image. Unlike the default view, this main image will span the entire screen.
  - <input type="checkbox"> The main image will still offer right and left arrows, which will have the same function of scrolling through the image set.
  - <input type="checkbox"> In the expanded view, thumbnails will not appear over the main image. Instead, icons indicating each image in the set will appear. These icons will be much smaller, but will have the same functionality in that clicking on them will skip to that image in the set. Additionally the icon for the currently selected. image will be distinguishably different from the rest.
  - <input type="checkbox"> In the default view, clicking on the image would open the expanded view. In the expanded view, however, clicking on the main image will zoom the image by 2.5 times. Instead of displaying a magnifying glass on hover, in the expanded view the mouse should become a “+” symbol while hovering over the main image.
  - <input type="checkbox"> After clicking, the zoomed image will be too large to display in the space provided. In this case, the portion of the image shown within the window should correspond to the current mouse position relative to the screen. For example, by moving the mouse right the portion of the zoomed image shown should pan to the right.
  - <input type="checkbox"> Furthermore, the position of the mouse relative to the centering of the zoomed image should be proportional. If the mouse is all the way in the bottom left corner of the expanded image gallery window, the bottom left corner of the zoomed image should be displayed. Moving the mouse to the top right should smoothly move the zoomed image available such until the top right of the image is displayed.
  - <input type="checkbox"> While the image is zoomed, no arrow buttons or thumbnail selection icons will be available. The mouse should display as a “-” symbol. Upon clicking the image in this state, the user should be returned to the normal expanded image gallery view.
