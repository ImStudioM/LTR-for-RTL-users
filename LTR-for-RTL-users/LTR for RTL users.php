<?php
/*
Plugin Name: LTR for RTL users
Plugin URI: http://imStudioM.co.il
Description: Change Dashboard direction to LTR for RTL users
Version: 1.0.0
Author: Shahar Avital
Author URI: http://imStudioM.co.il

*/

// Exit if accessed directly
if(!defined('ABSPATH')){
  exit;
}


$dirction = "";
$on = "";



// laod rtl style / script F
function load_rtl_button_scripts($hook) {
        wp_enqueue_style( 'main-style', plugins_url('css\style.css', __FILE__) );
	    //wp_enqueue_style( 'rtl-style', plugins_url('css\rtl.css', __FILE__) );
	    wp_enqueue_script( 'my_custom_script', plugins_url('js\main.js', __FILE__) );
}

// laod ltr style / script F
function load_ltr_button_scripts($hook) {
        wp_enqueue_style( 'main-style', plugins_url('css\style.css', __FILE__) );
	    wp_enqueue_style( 'ltr-style', plugins_url('css\ltr.css', __FILE__) );	
	    wp_enqueue_script( 'my_custom_script', plugins_url('js\main.js', __FILE__) );
}


// check cookeies if = RTL & load the style / script 
if ( isset($_COOKIE[rtl2ltrChack]) && $_COOKIE['rtl2ltrChack']== "ltr" ) {
	
	$GLOBALS['dirction'] = 'LTR';
	$GLOBALS['on'] = 'on';
	add_action( 'admin_enqueue_scripts', 'load_ltr_button_scripts' );
  
} else {
	
	$GLOBALS['dirction'] = 'RTL';
	add_action( 'admin_enqueue_scripts', 'load_rtl_button_scripts' );
}


// laod the BTN to admin panel F
function rtl_to_ltr_button($wp_admin_bar){
	
	if ( !is_admin() ) // Only Run if On Admin Pages
        return;
	
	$args = array(
		'id' => '',
		'title' => $GLOBALS['dirction'],
		'href' => '',
		'meta' => array(
			'html'    => '',
			'class'   => 'ltr-btn'. ' ' . $GLOBALS['on'],
			'onclick' => ''

			)
		);
		$wp_admin_bar->add_node($args);
}

// laod the BTN to admin panel
add_action( 'admin_bar_menu', 'rtl_to_ltr_button', 90);






