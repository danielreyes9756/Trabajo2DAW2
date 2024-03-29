<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Acme Themes
 * @subpackage Fitness Hub
 */

/**
 * fitness_hub_action_before_head hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked fitness_hub_set_global -  0
 * @hooked fitness_hub_doctype -  10
 */
do_action( 'fitness_hub_action_before_head' );?>
	<head>

		<?php
		/**
		 * fitness_hub_action_before_wp_head hook
		 * @since Fitness Hub 1.0.0
		 *
		 * @hooked fitness_hub_before_wp_head -  10
		 */
		do_action( 'fitness_hub_action_before_wp_head' );

		wp_head();
		?>

	</head>
<body <?php body_class();?>>

<?php
/**
 * WordPress Default Hook
 * Triggered after the opening <body> tag.
 * wp_body_open hook
 *
 * @since WordPress 5.2
 *
 */
do_action( 'wp_body_open' );
/**
 * fitness_hub_action_before hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked fitness_hub_site_start - 20
 */
do_action( 'fitness_hub_action_before' );

/**
 * fitness_hub_action_before_header hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked fitness_hub_skip_to_content - 10
 */
do_action( 'fitness_hub_action_before_header' );

/**
 * fitness_hub_action_header hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked fitness_hub_header - 10
 */
do_action( 'fitness_hub_action_header' );

/**
 * fitness_hub_action_after_header hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked null
 */
do_action( 'fitness_hub_action_after_header' );

/**
 * fitness_hub_action_before_content hook
 * @since Fitness Hub 1.0.0
 *
 * @hooked null
 */
do_action( 'fitness_hub_action_before_content' );