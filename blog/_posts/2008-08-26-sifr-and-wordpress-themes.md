---
layout: post
author: patdryburgh
title: sIFR and WordPress Themes
url_title: sifr-and-wordpress-themes
date: 2008-08-26
old_entry_id: 271


---

<p>When I was developing <a title="Junction - WordPress Theme" href="http://patdryburgh.net/junction/">Junction</a>, I was finally able to get sIFR and WordPress to play nicely, including having functioning title links.</p>
<p>The hardest part was getting sIFR to work on whatever installation of WordPress other users had. My site uses the root folder as the WordPress installation folder, however others use “/blog/”, “/wordpress/”, etc.</p>
<p>Below is how I made it all work (with thanks to <a href="http://jbradforddillon.com/">J. Bradford Dillon</a>).</p>
<ol>
<li><a href="http://novemberborn.net/sifr3/r318">Download sIFR 3</a> from the nightly builds.</li>
<li>Follow the <a href="http://designintellection.com/2008/this-is-how-you-get-sifr-to-work/">instructions at Design Intellection</a> for exporting sIFR files (<strong>UPDATE:</strong> <a title="Generate sIFR Font Files" href="http://sifrgenerator.com/">sIFRGenerator.com</a> has just been updated to support sIFR 3 font files! Simply upload your TTF file, and let <a title="Generate sIFR Font Files" href="http://sifrgenerator.com/">sIFRGenerator.com</a> do the rest!).</li>
<li>In the js/sifr-config.js file, remove or comment out the first three lines of code.
<pre class="language">//var MYSIFRFONT = {
//      src: 'wp-content/themes/THEMENAME/sifr/flash/MYSIFRFONT.swf'
//};</pre>
</li>
<li>Upload sIFR folder to your theme’s directory (ie. ”/themename/sifr/”).</li>
<li>Copy the following code and add it to your theme’s functions.php file, replacing “MYSIFRFONT” with the name of your font file (ie. rockwell.swf) and “THEMENAME” with your theme’s folder name.
<pre class="language">// sIFR
function sifr_scripts() {
global $siteurl;
if (empty($siteurl)) $siteurl = get_settings('siteurl');
$sifrurl = $siteurl.'/'.'wp-content/themes/THEMENAME/sifr/';

/* The xhtml header code needed for sIFR to work: */
/* Added inline JS for mod_rewrite concerns - http://jbradforddillon.com */
echo '&lt;!-- start sifr scripts --&gt;

&lt;link rel="stylesheet" href="'.$sifrurl.'css/sIFR-screen.css" type="text/css" media="screen" /&gt;
&lt;link rel="stylesheet" href="'.$sifrurl.'css/sIFR-print.css" type="text/css" media="print" /&gt;

&lt;script src="'.$sifrurl.'js/sifr.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
var MYSIFRFONT = { src: "'.$sifrurl.'flash/MYSIFRFONT.swf" };
&lt;/script&gt;
&lt;script src="'.$sifrurl.'js/sifr-config.js" type="text/javascript"&gt;&lt;/script&gt;

&lt;!-- sifr scripts --&gt;

' ;

}

add_action('wp_head', 'sifr_scripts');</pre>
</li>
<li>Continue setting sIFR up using the <a href="http://designintellection.com/2008/this-is-how-you-get-sifr-to-work/">instructions at Design Intellection</a>.</li>
<li>Smile as you enjoy fantastic web typography (for titles, at least).</li>
</ol>
<p>If you have any questions, please let me know!</p>
<p>(As a side note, if anyone knows a good plugin for adding code to a wordpress post, I’d love to know if it! Thanks - PD)</p>