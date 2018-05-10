<?php
/**
 * The main template file
 *
 * @package WordPress
 * @since Epicurien 0.0.1
 * @subpackage Epicurien
 */
 ?>

 <!DOCTYPE html>
 <html <?php language_attributes(); ?> class="no-js">
    <head>
      <meta charset="<?php bloginfo( 'charset' ); ?>">
      <meta name="viewport" content="width=device-width">
      <link rel="profile" href="http://gmpg.org/xfn/11">
      <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
      <title>Epicurien</title>
      <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
      <div id="root">
        <?php wp_footer(); ?>
      </div>
      <script src="bundle.js"></script>
    </body>
</html>
