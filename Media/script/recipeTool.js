$(document).ready(function() {
    (function(window) {

        $.ajax({
            type: 'GET',
            url: '../celebrate-this-spring/Media/xml/recipes.xml',
            dataType: 'xml',
            success: xmlLoaded2
        });

        var recipes = new Array();
        var rlWidth;
        var maxX;
        var rId = 0;
        var directRecipeID = 0;
        var directRecipeName;
        var theXMLLoaded = false;

        function xmlLoaded2(xml) {
            $(xml).find('recipe').each(function() {
                var recipe = new Object();
                recipe.rId = rId;
                recipe.rName = $(this).find('name').text();
                recipe.track = $(this).find('tracking').text();
                recipe.serves = $(this).find('serves').text();
                recipe.preptime = $(this).find('prep').text();
                recipe.cooktime = $(this).find('cookTime').text();
                recipe.image = $(this).find('img').attr('big');
                recipe.blurb = $(this).find('blurb').text();
                recipe.legal = $(this).find('addInfo').text();
                if ($(this).find('videoLink').text() == 'none')
                    recipe.hasVideo = false;
                else {
                    recipe.videoLink = $(this).find('videoLink').text();
                    recipe.videoPoster = $(this).find('videoPoster').text();
                    recipe.hasVideo = true;
                }

                recipe.ingredients = new Array();
                $(this).find('ingredients').find('ingredient').each(function() {
                    var ingredient = new Object();
                    ingredient.url = $(this).attr('url');
                    ingredient.txt = $(this).text();
                    recipe.ingredients.push(ingredient);
                });

                recipe.directions = new Array();
                $(this).find('directions').find('direction').each(function() {
                    recipe.directions.push($(this).text());
                });
                recipe.filters = $(this).find('filter').text().split(', ');

                recipes.push(recipe);

                rId++;
            });

            rlWidth = 92 * recipes.length;

            maxX = -1 * (rlWidth - (92 * 7));

            $('#recipeList').css({
                width: rlWidth + 'px'
            });

            if (window.qs['srid'])
                getDirectRecipe(parseInt(window.qs['srid']));
            else
                getDirectRecipe(0);

            theXMLLoaded = true;
        }

        function getDirectRecipe(which) {
            if (recipes.length > 7) {
                var theRecipeThumbPos = -1 * (directRecipeID * 92);

                if (theRecipeThumbPos <= maxX) {
                    $('#recipeList').css({
                        left: maxX + 'px'
                    });
                } else {
                    $('#recipeList').css({
                        left: theRecipeThumbPos + 'px'
                    });
                }
            }

            if (recipes.length <= 7) {
                $('#recipes-close').css('right', '-219px');
                $('#poweredBy').css('right', '-159px');

                $('#recipe-scroller-next').css('visibility', 'hidden');
                $('#recipe-scroller-prev').css('visibility', 'hidden');
            } else {
                $('#recipe-scroller-next').css('visibility', 'visible');
                $('#recipe-scroller-prev').css('visibility', 'visible');
            }

            $('#recipeList').css('left', '0px');
            $('#recipeList ul').empty();

            for (var i = 0; i < recipes.length; i++) {
                $('#recipeList ul').append('<li title="' + recipes[i].rName + '" class="recipe-thumbs"> \
                    <a id="' + recipes[i].track + '" href="" track="recipeThumb_' + recipes[i].track + '"> \
                        <img class="thumbImage" src="' + recipes[i].image + '"/> \
                        <img class="thumbSelectedOff" src="Media/images/recipeTool/active-thumb.png"/> \
                    </a> \
                </li>');
                $('#' + recipes[i].track).live('click', loadRecipeInfo);
            };

            if (which > 0) {
                if (recipes.length > 7) {
                    var theRecipeThumbPos = -1 * (which * 92);

                    if (theRecipeThumbPos < maxX)
                        $('#recipeList').css({
                            left: maxX + 'px'
                        });
                    else
                        $('#recipeList').css({
                            left: theRecipeThumbPos + 'px'
                        });
                }

            }

            changeRecipe(recipes[which], which);
        }

        function resetRecipeList() {
            changeRecipe(recipes[0], 0);
        }

        window.resetRecipeList = resetRecipeList;

        var curRecipeID;
        var curRecipeName;
        var theTracker;

        function changeRecipe(action, curID) {

            $('#recipeList ul li:nth-child(' + (parseInt(curID) + 1) + ') img:nth-child(2)').removeClass('thumbSelectedOff');
            $('#recipeList ul li:nth-child(' + (parseInt(curID) + 1) + ') img:nth-child(2)').addClass('thumbSelectedOn');

            directRecipeName = action.track;
            curRecipeName = action.rName;
            curRecipeID = curID;
            theTracker = action.rName.replace(/\s/g, "");
            theTracker = theTracker.replace("®", "");
            theTracker = theTracker.replace("<br/>", " ");

            $('#recipeDetails').empty();
            $('.printItWrapper').empty();
            var ingredients = '<ul class="ingredientsList">';
            for (var i = 0; i < action.ingredients.length; i++) {
                ingredients += '<li>' + action.ingredients[i].txt + '</li>';
            }
            ingredients += '</ul>';

            var directions = '<ol>';
            for (var i = 0; i < action.directions.length; i++) {
                directions += '<li>' + action.directions[i] + '</li>';
            }
            directions += '</ol>';

            var pinterestName = action.rName;

            pinterestName = pinterestName.replace('®', '%C2%AE ');

            $('#recipeDetails').append(
                '<div class="recipe-preview printable"> \
                <div class="large-image-wrap"><img src="' + action.image + '"></div>\
                <div class="recipe-preview-info"> \
                    <h1>' + action.rName + '</h1> \
                    <img src="Media/images/recipeTool/dottedSeperator.png" /> \
                    <div class="prep-time-wrap"> \
                        <p style="color:#669E2F;"><span><strong>Preparation time:</strong></span> ' + action.preptime + '</p> \
                        <p style="color:#669E2F;"><span><strong>Cook time:</strong></span> ' + action.cooktime + '</p> \
                        <p style="color:#669E2F;"><span><strong>Servings:</strong></span> ' + action.serves + '</p> \
                    </div> \
                    <img src="Media/images/recipeTool/dottedSeperator.png" /> \
                    <p class="recipe-description">' + action.blurb + '</p> \
                    <a class="view-recipe-details" track="ViewRecipe_' + theTracker + '"><strong>View this recipe &rsaquo;&rsaquo;</strong></a> \
                    <div class="shareStuff"> \
                        <a class="fb shareStuffA" href="#" track="FaceBookShare_' + theTracker + '"><img src="Media/images/recipeTool/shareRecipeBtn.png"/></a> \
                        <a class="pinIt shareStuffA" href="#" track="Pinit_' + theTracker + '"><img src="Media/images/recipeTool/pinRecipeBtn.png" /></a> \
                        <a class="print shareStuffA" track="Print_' + theTracker + '" ><img src="Media/images/recipeTool/printRecipeBtn.png"/></a> \
                    </div> \
                </div> \
            </div> \
            <div class="recipe-details"> \
                <div class="recipe-details-title"> \
                    <h1>' + action.rName + '</h1> \
                    <a class="close-recipe-details" track="RecipeDetailsClose_' + theTracker + '">X Close Recipe</a> \
                </div> \
                <div class="recipe-details-wrap"> \
                    <div class="recipe-details-innerwrap"> \
                        <h3>Ingredients</h3> \
                        ' + ingredients + '\
                    </div> \
                    <div class="recipe-details-innerwrap"> \
                        <h3>Cooking Directions</h3> \
                        ' + directions + '\
                    </div> \
                    <div class="recipe-legal"> \
                        ' + action.legal + ' \
                    </div> \
                </div> \
            </div>'
            );

            if (action.hasVideo) {
                $('.shareStuff').append(' \
                <a class="vid shareStuffA" title="' + action.rName + '" href="Media/html/video_dynamic.html?vid=' + action.videoLink + '&pid=' + action.videoPoster + '?iframe=true&amp;width=660&amp;height=395" track="Video_' + theTracker + '" rel="prettyPhoto[iframes]"> \
                    <img src="Media/images/recipeTool/videoRecipeBtn.png" /> \
                </a>');
                $("a[rel^='prettyPhoto']").prettyPhoto({
                    theme: 'facebook',
                    deeplinking: false,
                    markup: '<div class="pp_pic_holder"> \
                        <div class="ppt"></div> \
                        <div class="pp_top"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                        <div class="pp_content_container"> \
                            <div class="pp_left"> \
                            <div class="pp_right"> \
                                <div class="pp_content"> \
                                    <div class="pp_loaderIcon"></div> \
                                    <div class="pp_fade"> \
                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                        <div class="pp_hoverContainer"> \
                                            <a class="pp_next" href="#">next</a> \
                                            <a class="pp_previous" href="#">previous</a> \
                                        </div> \
                                        <div id="pp_full_res"></div> \
                                        <div class="pp_details"> \
                                            <div class="pp_nav"> \
                                                <a href="#" class="pp_arrow_previous">Previous</a> \
                                                <p class="currentTextHolder">0/0</p> \
                                                <a href="#" class="pp_arrow_next">Next</a> \
                                            </div> \
                                            <p class="pp_description"></p> \
                                            {pp_social} \
                                            <a class="pp_close" href="#">Close</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                            </div> \
                        </div> \
                        <div class="pp_bottom"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                    </div> \
                    <div class="pp_overlay"></div>'

                });
            }


            $("a.vid.shareStuffA").on('click', function() {
                var recipeTrack = $(this).attr('track').replace(" ", "");
            });


            $('.printItWrapper').append(
                '<div class="recipe-preview printable"> \
                <div class="large-image-wrap"><img src="' + action.image + '"></div>\
                <div class="recipe-preview-info"> \
                    <h1>' + action.rName + '</h1> \
                    <img src="Media/images/recipeTool/dottedSeperator.png" /> \
                    <div class="prep-time-wrap"> \
                        <p style="color:#669E2F;"><span><strong>Preparation time:</strong></span> ' + action.preptime + '</p> \
                        <p style="color:#669E2F;"><span><strong>Cook time:</strong></span> ' + action.cooktime + '</p> \
                        <p style="color:#669E2F;"><span><strong>Servings:</strong></span> ' + action.serves + '</p> \
                    </div> \
                    <p class="recipe-description"><p class="recipe-description">' + action.blurb + '</p> \</p> \
                </div> \
                <div class="recipe-details-wrap2"> \
                    <div class="recipe-details-innerwrap" id="printInstructions"> \
                        <h3>Ingredients</h3> \
                        ' + ingredients + '\
                    </div> \
                    <div class="recipe-details-innerwrap" id="printDirections"> \
                        <h3>Cooking Directions</h3> \
                        ' + directions + '\
                    </div> \
                    <div class="recipe-legal"> \
                        ' + action.legal + ' \
                    </div> \
                </div> \
            </div>'
            );

            var newWrapHeight;

            if (parseInt($('#printInstructions').css('height')) > parseInt($('#printDirections').css('height')))
                newWrapHeight = parseInt($('#printInstructions').css('height')) + 50;
            else
                newWrapHeight = parseInt($('#printDirections').css('height')) + 50;

            $('.recipe-details-wrap2').css('height', newWrapHeight + 'px');

            $('a.fb').on('click', function(e) {
                e.preventDefault();

                var n = encodeURIComponent(action.rName).replace("<br/>", " ");

                window.open('http://www.facebook.com/sharer.php?s=100&p[url]=http://www5.samsclub.com/Featured-Brand/del-monte/Celebrate-This-Spring/?srid=' + curRecipeID + '&p[images][0]=http://www5.samsclub.com/' + recipes[curRecipeID].image + '&p[title]=Mmmm … Cheddar Corn Casserole.&p[summary]=Get recipes for the perfect green bean casserole and other delicious dishes at Sam’s Club®. Try this delicious dish: ' + n, '1369231912910', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0');

            });

            $('.pinIt').on('click', function(e) {
                var n = pinterestName.replace("<br/>", " ");

                e.preventDefault();
                window.open('http://pinterest.com/pin/create/button/?url=http://www5.samsclub.com/Featured-Brand/del-monte/Celebrate-This-Spring/default.aspx?srid=' + action.rId + '&amp;media=http://www5.samsclub.com' + action.image + '&amp;description=' + n, '1369231912910', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0');
            });

            $('a.print').on('click', function(e) {
                window.print();
                e.preventDefault();

            });

            $('.view-recipe-details').on('click', showDetails);
            $('.close-recipe-details').on('click', hideDetails);

            $('#loader').hide();

        }

        function loadRecipeInfo(e) {
            e.preventDefault();
            $('#loader').show();

            $('#recipeList ul li img:nth-child(2)').removeClass('thumbSelectedOn');
            $('#recipeList ul li img:nth-child(2)').addClass('thumbSelectedOff');

            for (var i = 0; i < recipes.length; i++) {
                if (recipes[i].track == $(this).attr('id')) {
                    changeRecipe(recipes[i], i);
                    break;
                }
            }
        }

        window.getDirectRecipe = getDirectRecipe;

        function showDetails(e) {
            TweenMax.to($('.recipe-preview'), .35, {
                css: {
                    autoAlpha: 0
                },
                ease: Quad.easeOut
            });
            TweenMax.to($('.recipe-details'), .35, {
                css: {
                    autoAlpha: 1
                },
                ease: Quad.easeOut
            });
            initiateJScroll();
            e.preventDefault();
        }

        function hideDetails(e) {
            TweenMax.to($('.recipe-preview'), .35, {
                css: {
                    autoAlpha: 1
                },
                ease: Quad.easeOut
            });
            TweenMax.to($('.recipe-details'), .35, {
                css: {
                    autoAlpha: 0
                },
                ease: Quad.easeOut
            });
            e.preventDefault();
        }

        $('.inactive').on('click', loadNewGroup);

        function loadNewGroup() {
            $('#recipeList ul').empty();

            getRecipes($(this).attr('data'));
            $('.categoryBtn').removeClass('reactive');
            $('.categoryBtn').addClass('inactive');
            $(this).addClass('reactive');
        }

        var thumbsAnimating = false;

        $('#recipe-scroller-prev').live('click', function() {
            var rlPos = (parseInt($('#recipeList').css('left')) + 92);
            if (parseInt($('#recipeList').css('left')) < 0 && thumbsAnimating == false) {
                thumbsAnimating = true;
                TweenMax.to($('#recipeList'), .5, {
                    css: {
                        left: rlPos
                    },
                    onComplete: function() {
                        thumbsAnimating = false;
                    }
                });
            }
        });
        $('#recipe-scroller-next').live('click', function() {
            var rlPos = (parseInt($('#recipeList').css('left')) - 92);
            if (parseInt($('#recipeList').css('left')) > maxX && thumbsAnimating == false) {
                thumbsAnimating = true;
                TweenMax.to($('#recipeList'), .5, {
                    css: {
                        left: rlPos
                    },
                    onComplete: function() {
                        thumbsAnimating = false;
                    }
                });
            }

        });

        function initiateJScroll() {
            $('.recipe-details-wrap').jScrollPane({
                autoReinitialise: true,
                verticalDragMinHeight: 34,
                verticalDragMaxHeight: 34

            });
        }


    })(window);
});