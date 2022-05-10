<?php if (is_page('13')) : ?>
<section class="join">
    <div class="join-bg">
        <div class="join-wrap">
            <div class="join-item">
                <div class="item-desc">
                    <div class="item-desc--desc">
                        If you haven’t found an appropriate position, but you feel that we should work together, send your CV to the
                        <a  class="item-link" href="https://calendly.com/remdev/meeting?month=2022-04" title="" rel="home">join@nozomi.io</a>
                    </div>
                </div>
            </div>
            <div class="join-svg">
                <div class="item-img">
                    <img class="img" src="<?php echo get_template_directory_uri(); ?>/assets/images/join-svg.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>
<footer class="c-footer">
    <div class="c-footer-top">
        <div class="c-footer-top-wrap">
            <div class="c-footer-top-item">
                <div class="item">
                    <?php
                    $text_1_footer = get_field('text_1_footer', 'options');
                    if ($text_1_footer) { ?>
                        <div class="item-title">
                            <div class="item-title--title">
                                <?php echo $text_1_footer; ?>
                            </div>
                        </div>
                    <?php } ?>
                    <?php
                    $button_text_footer = get_field('button_text_footer', 'options');
                    $button_link_footer = get_field('button_link_footer', 'options');
                    if ($button_text_footer) { ?>
                        <div class="item-btns">
                            <div class="item-btns-btn">
                                <a href="https://calendly.com/remdev/meeting?month=2022-04" target="_blank" class="btn btn-book--js">
                                <?php /*
                                   <a href="<?php echo $button_link_footer; ?>" target="_blank" class="btn btn-book--js">
                                */ ?>
                                </a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="c-footer-middle">
        <div class="c-footer-middle-wrap">
            <div class="c-footer-middle-left">
                <div class="c-footer-desc">
                    <div class="item">
                        <?php
                        $text_2_footer = get_field('text_2_footer', 'options');
                        ?>
                        <?php /*
                        if ($text_2_footer) { ?>
                            <div class="item-title">
                                <div class="item-title--title">
                                    <?php echo $text_2_footer; ?>
                                </div>
                            </div>
                        <?php } */ ?>
                        <div class="c-footer-logo">
                            <a  class="c-footer-logo-item" href="<?php echo home_url('/'); ?>" title="" rel="home">
                                <img class="logo" title='Nozomi Health' src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-footer-v.svg" alt=""/>
                            </a>
                        </div>
                        
                        <?php
                        $text_3_footer = get_field('text_3_footer', 'options');
                        if ($text_3_footer) { ?>
                            <div class="item-desc">
                                <div class="item-desc--desc">
                                    <?php echo $text_3_footer; ?>
                                </div>
                            </div>
                        <?php } ?>
                    </div>

                </div>
            </div>
            <div class="c-footer-middle-right ">
                <div class="c-footer-menu">
                    <?php wp_nav_menu(array('theme_location' => 'primary1', 'fallback_cb' => '', 'items_wrap' => '<ul>%3$s</ul>', 'container' => '')); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="c-footer-bottom">
        <div class="c-footer-bottom-wrap">
            <div class="c-footer-social">
                <?php
                $instagram_link = get_field('instagram_link', 'options');
                if ($instagram_link) { ?>
                    <div class="c-footer-social-item">
                        <a class="c-footer-social-link instagram" href="<?php echo $instagram_link; ?>" target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z" fill=""/>
                            </svg>
                        </a>
                    </div>
                <?php } ?>
                <?php
                $dribbble_link = get_field('dribbble_link', 'options');
                if ($dribbble_link) { ?>
                    <div class="c-footer-social-item">
                        <a class="c-footer-social-link dribble" href="<?php echo $dribbble_link; ?>" target="_blank">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22.0017 13.3172 21.7423 14.6216 21.237 15.8379C20.7316 17.0543 19.9901 18.1584 19.0555 19.0865C18.1285 20.0118 17.0283 20.7454 15.8177 21.2454C14.6071 21.7453 13.3098 22.0017 12 22C6.47701 22 2.00001 17.523 2.00001 12C1.99651 9.43589 2.98144 6.96909 4.75001 5.11251C5.68318 4.12781 6.80747 3.34388 8.05407 2.8087C9.30068 2.27352 10.6434 1.99834 12 2.00001C13.3098 1.99831 14.6071 2.25475 15.8177 2.75466C17.0283 3.25458 18.1285 3.98817 19.0555 4.91351C19.9901 5.84162 20.7316 6.94575 21.237 8.16208C21.7423 9.37842 22.0017 10.6829 22 12Z" fill="#2E2E2E" stroke="#9C9B98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.0001 12.0003C20.5411 12.0003 16.5161 11.4503 12.9136 13.0318C9.00014 14.7503 6.16664 17.4158 4.93164 19.0738" stroke="#9C9B98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.25 2.72754C9.815 4.17204 13.23 7.85004 14.5 11.5005C15.77 15.1515 16.24 19.6405 16.53 20.918" stroke="#9C9B98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.07715 10.7499C3.96615 10.8639 8.96665 10.9664 12.1666 9.59986C15.3666 8.23336 18.1201 5.71986 19.0646 4.92236" stroke="#9C9B98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </a>
                    </div>
                <?php } ?>
                <?php
                $linkedin_link = get_field('linkedin_link', 'options');
                if ($linkedin_link) { ?>
                <div class="c-footer-social-item">
                    <a class="c-footer-social-link linkedin" href="<?php echo $linkedin_link; ?>" target="_blank">

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4613 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86962 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z" fill=""/>
                        </svg>
                    </a>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
</footer>
<span id='cursor' class="cursor"><span class="cursor-dot"></span></span>
<div class="preloader preloader--js"></div>
</div>


<?php wp_footer(); ?>


</body>

</html>