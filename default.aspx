<%@ Page Language="C#" MasterPageFile="~/Library/MasterPages/Global960NewSiteHeader.Master" AutoEventWireup="true" Title="Recipe Tool" %>

<%@ MasterType VirtualPath="~/Library/MasterPages/Global960NewSiteHeader.Master" %>
<%@ Register Src="/Library/Controls/OASSetupScript.ascx" TagName="OASSetupScript" TagPrefix="ucOAS" %>
<%@ Register Src="~/Library/Controls/BreadCrumb.ascx" TagName="BreadCrumb" TagPrefix="uc3" %>

<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeaderContentHolder" runat="server">
    <%--Meta Information--%>
    <meta name="keywords" content="" />
    <meta name="description" content="" />

    <%--CSS--%>
    <link href="Media/css/recipe-styles.css" media="All" rel="stylesheet" type="text/css" />
    <link href="Media/css/style.css" media="All" rel="stylesheet" type="text/css" />

    <%--Javascript--%>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script type="text/javascript" src='Media/script/recipeTool.js'></script>
    <script type="text/javascript" src="Media/script/Init.js"></script>

</asp:Content>


<%--SITEMAP--%>
<asp:Content ID="SiteMapContent" ContentPlaceHolderID="CenterHeaderContent" runat="server"></asp:Content>


<%----CONTENT----%>
<asp:Content ID="MainContent" ContentPlaceHolderID="MasterContentHolder" runat="server">
    <asp:ScriptManager ID="smScriptManager" runat="server" />

<div class="positionRelative">

    <div id='preloader'>
        <img src="/Global/images/ajaxLoaders/Sams-Standard-Chasing-Circle.gif">
    </div>

    <div class="main_content_full">
        <div class="inner-content">

                <div class="container_12">

                    <div class="recipes-container">
                        <div class="recipe-banner">
                            <img src="media/images/celebrate-spring.png" alt="">
                        </div>
                        <div class="recipe-mod">
                            <div class="flexslider carousel" id="recipesScroller">
                                <ul class="slides">
                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="0" track="viewRecipeCheddarCornCasserole">
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/CheddarCornCasserole.jpg" alt="Cheddar Corn Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Cheddar Corn Casserole</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="1" track="viewRecipeUltimateCreamyMashedPotatoes" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/UltimateCreamyMashedPotatoes.jpg" alt="Ultimate Creamy Mashed Potatoes" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Ultimate Creamy Mashed Potatoes</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="2" track="viewRecipeGreenBeanCasserole" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/GbcBigBatch.jpg" alt="Green Bean Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Green Bean Casserole</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="3" track="viewRecipeBrownSugarGreenBeans" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/BrownSugarGreenBeans.jpg" alt="Brown Sugar Bacon Green Beans Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Brown Sugar Bacon Green Beans</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="4" track="viewRecipeClassicGreenBeanCasserole">
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/GbcRegular.jpg" alt="Classic Green Bean Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Classic Green Bean Casserole</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="5" track="viewRecipeCrunchyOnionChickenNoodleDinner" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/CrunchyOnionChickenNoodleDinner.jpg" alt="" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Crunchy Onion Chicken &amp; Noodle Dinner</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="6" track="viewRecipeCrunchyOnionMashedPotatoes" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/CrunchyOnionMashedPotatoes.jpg" alt="" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Crunchy Onion Mashed Potatoes</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="7" track="viewRecipeMoistAndSavoryStuffing" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/MoistAndSavoryStuffing.jpg" alt="Moist and Savory Stuffing" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Moist and Savory Stuffing</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="8" track="viewRecipeOldFashionedStuffing" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/OldFashionedStuffing.jpg" alt="" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Old-Fashioned Stuffing</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="9" track="viewRecipeQuickCrunchyMacCheese">
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/QuickCrunchyMacCheese.jpg" alt="" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Quick &amp; Crunchy Mac &amp; Cheese</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="10" track="viewRecipeTurkeyNoodleCasserole" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/TurkeyNoodleCasserole.jpg" alt="Turkey Noodle Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Turkey Noodle Casserole</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="recipe-asset-item" >
                                            <a class="recipe-grid-load-story" href="" productId="11" track="viewRecipeTurkeyStuffingCasserole" >
                                                <div class="image-wrap">
                                                    <img src="media/images/recipe/TurkeyStuffingCasserole.jpg" alt="Turkey Stuffing Casserole" class="headline-grid-image">
                                                </div>
                                                <div class="recipe-tile-wrap">
                                                    <div class="recipe-tile">
                                                        <h3 class="title headline-asset-item-back-title">Turkey and Stuffing Casserole</h3>
                                                        <p class="headline-asset-item-back-text">View Recipe &gt;</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div class="recipeTool" id="recipeMod">
                                <!-- #include virtual="Media/html/recipeTool.html" -->
                            </div>
                    </div>
                </div>

        </div> <!-- inner-content-end -->
    </div> <!-- main-content-end -->

</div>
 <script>
        (function(window)
        {
            var qs = (function(a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i)
            {
                var p=a[i].split('=');
                if (p.length != 2) continue;
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
            })(window.location.search.substr(1).split('&'));

            window.qs = qs;
        })(window);

        $( document ).ready( function(){
            if( window.qs['srid'] )
            {
                $( '.recipeTool' ).css( 'display', 'block' );
                TweenMax.to ( $( '.recipeTool' ), .35, { css : { autoAlpha : 1 }, ease : Quad.easeOut } );

                $( window ).load(function(){
                    var targ = $( '#recipe-mod' ).offset();
                    $('body,html').animate({ scrollTop: 900 }, 1000);
                });

            }
            else
            {
                TweenMax.to ( $( '.recipeTool' ), 0, { css : { autoAlpha : 0 }, ease : Quad.easeOut, onComplete : function(){
                    $( '.recipeTool' ).css( 'display', 'none' );
                } } );
            }
        });
    </script>
</asp:Content>
