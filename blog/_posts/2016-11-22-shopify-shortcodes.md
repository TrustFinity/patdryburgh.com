---
layout: post
author: patdryburgh
title: Creating product shortcodes for Shopify
url_title: shopify-shortcodes
date: 2016-11-22
---

{% raw %}
This past month I had the wonderful opportunity to design and develop a Shopify theme for my friends at [Rye 51][1]. While a case study will be forthcoming, I wanted to share one aspect of the site's development that really got my gears turning.

One of our goals for this project was to allow [Matt][6] and his team the ability to publish [weekly collections][7] featuring interviews and other editorial content. Out of the box, Shopify allows you to display collections of products with a collection name and description followed by a list of products. While this is perfectly suitable for common category collections, for custom collections we wanted to include images of and links to products throughout the long-form editorial content.

<figure class="extra-wide">
  <img src="/images/uploads/inline-product.jpg" alt="Inline Product" />
  <figcaption>Rye 51 can add products directly to a collection description by adding a simple shortcode</figcaption>
</figure>

To accomplish this, I employed the help of Culture Kings' [Shopify Shortcodes][2] library to create a product shortcode. Using Shopify Shortcodes is pretty simple:

1. Install the Shopify Shortcodes library.
2. Create a shortcode using the naming convention `shortcode-NAME.liquid` in your `snippets` folder.
3. Replace tags such as `{{ collection.description }}` with `{% include 'shortcode' load: collection.description %}` in your `collections.liquid` file.
4. Add `[shortcode]` to the description field in your Shopify admin.
5. Watch the magic unfold.

The Shopify Shortcodes library comes with example shortcodes for [FlexSlider][3], [FontAwesome][4], and YouTube. Looking at these will give you an idea of how the library parses information passed through a shortcode. The basic structure is something like:

`[shortcode-name attribute='value']`

To create a product shortcode, I started by creating a file in the `snippets` folder called `shortcode-product.liquid`. The shortcode I want to provide for my client should be simple, so I'm going to use the product's [handle][8] (or URL slug) in the shortcode, like so:

`[product name='product-handle']`

To pass the `name` attribute to your shortcode snippet, we'll need to capture it near the beginning of the `shortcode-product.liquid` file: 

`{% capture productHandle %}{% include 'shortcode-render' render:'name' %}{% endcapture %}`

Now, I can use `{{ productHandle }}` in my snippet to pull in the shortcode's `name` attribute and use it to assign `product`:

`{% assign product = all_products[productHandle] %}`

From here, it's just a matter of using the attributes available through Shopify's `product` [object][5] to display the product's title, image, and URL.

    <h1 class="title">
      {{ product.title }}
    </h1>
    <a href="{{ product.url }}">
      <img src="{{ product.featured_image.src | product_img_url: '1024x1024' }}" alt="{{ image.alt | escape }}" />
    </a>

You can add other attributes, such as a `float` to allow the product to appear on either side of the text or to add more content. I've used this same method to create image galleries and fancy block quotes, as well.

Shortcodes are a simple way to give your clients' the power to create even more engaging experiences for their customers.
{% endraw %}

[1]: http://rye51.com
[2]: https://github.com/culturekings/shopify-shortcodes
[3]: https://woocommerce.com/flexslider/
[4]: http://fontawesome.io
[5]: https://help.shopify.com/themes/liquid/objects/product
[6]: http://twitter.com/mattalexander
[7]: https://rye51.com/collections/
[8]: https://help.shopify.com/themes/liquid/objects/product#product-handle