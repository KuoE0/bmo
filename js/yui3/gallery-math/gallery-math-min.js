YUI.add("gallery-math",function(e,t){"use strict";e.mix(Math,{sign:function(e){return e<0?-1:e>0?1:0},add:function(){return e.Array.reduce(e.Array(arguments),0,function(t,n){return e.Lang.isArray(n)&&(n=Math.add.apply(this,n)),t+n})},addReciprocals:function(){return e.Array.reduce(e.Array(arguments),0,function(t,n){return e.Lang.isArray(n)?t+Math.addReciprocals.apply(this,n):t+1/n})},parallel:function(){return 1/Math.addReciprocals.apply(this,arguments)},multiply:function(){return e.Array.reduce(e.Array(arguments),1,function(t,n){return e.Lang.isArray(n)&&(n=Math.multiply.apply(this,n)),t*n})},degreesToRadians:function(e){return e*Math.PI/180},radiansToDegrees:function(e){return e*180/Math.PI},acosh:function(e){return Math.log(e+Math.sqrt(e*e-1))},asinh:function(e){return Math.log(e+Math.sqrt(e*e+1))},atanh:function(e){return Math.log((1+e)/(1-e))/2},cosh:function(e){var t=Math.exp(e);return(t+1/t)/2},sinh:function(e){var t=Math.exp(e);return(t-1/t)/2},tanh:function(e){var t=Math.exp(2*e);return(t-1)/(t+1)}})},"@VERSION@",{requires:["array-extras"]});
