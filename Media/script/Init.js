$(document).ready(function() {


        /*****************************************
    Recipe Scroller
    *****************************************/

        function closeRecipe() {
            $('.recipeTool').css('display', 'none');

            TweenMax.to($('.recipeTool'), .4, {
                    css: {
                        autoAlpha: 0
                    },
                    onComplete: function() {
                        resetRecipeList();
                    }); TweenMax.to($('.recipes-container'), .4, {
                    css: {
                        height: 310
                    }
                }); $('.recipe-mod').show();
            }

            function expandRecipe() {
                $('.recipeTool').css('display', 'inline');
                TweenMax.to($('.recipeTool'), .35, {
                    css: {
                        autoAlpha: 1
                    },
                    ease: Quart.easeOut
                });
                $('.recipe-mod').hide();
                TweenMax.to($('.recipes-container'), .35, {
                    css: {
                        height: 535
                    },
                    ease: Quart.easeOut
                });
            }

            $('#recipes-close').on('click', function() {
                closeRecipe();
            });

            $('.recipe-grid-load-story').on('click', function(e) {
                e.preventDefault();
                expandRecipe();
                getDirectRecipe($(this).attr('productId'));

            });


        }); // end of document ready