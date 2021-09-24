<?php
/*
 * Plugin Name: WP Product Countdown
 * Plugin URI:  https://itssaif.dev
 * Description: This plugin is developed to set the countdown on product purchase to get the next day delivery alert
 * Version:     1.0
 * Author:      SaifUllah Akhtar
 * Author URI:  https://itssaif.dev
 * License:     GPL-2.0+
 * License URI: https://github.com/saifullahakhtar
*/

function timer() {
    date_default_timezone_set('Europe/London');
    $currentTime = date("H:i:s");
    
	wp_enqueue_script("timer-script", array('jquery') , '1.0', true);
	wp_enqueue_style("timer-style");
	return '<div>Order within <span id="sb-timer">' . $currentTime .'</span> for delivery on <span id="sb-day"></span></div>';
}

function load_timer_assets() {
	wp_register_script("timer-script", plugins_url("timer.js", __FILE__), array('jquery'), "1.0", false);
	wp_register_style("timer-style", plugins_url("style.css", __FILE__), array(), "1.0", "all");
}

add_action('init', 'load_timer_assets');

add_shortcode('time_by_saif', 'timer');

?>