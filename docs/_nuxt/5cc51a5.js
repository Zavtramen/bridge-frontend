(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(n,e,t){var content=t(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(100).default)("7bb96de3",content,!0,{sourceMap:!1})},177:function(n,e,t){"use strict";t(10);e.a=function(){return new Promise((function(n){n({Bridge:t(224)})}))}},180:function(n,e,t){"use strict";var o=t(0),r=t(176),l=o.a.extend({name:"LayoutDefault",head:function(){return{htmlAttrs:{lang:"en",translate:"no"},meta:[{hid:"google",name:"google",content:"notranslate"}]}},mounted:function(){document.documentElement.classList.add("touch"===r.a?"isTouch":"isPointer")}}),c=(t(222),t(91)),component=Object(c.a)(l,(function(){var n=this._self._c;this._self._setupProxy;return n("div",{staticClass:"LayoutDefault"},[n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},189:function(n,e,t){n.exports=t(190)},220:function(n,e,t){var content=t(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(100).default)("4c5dc825",content,!0,{sourceMap:!1})},221:function(n,e,t){var o=t(99)(!1);o.push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n}\ninput, textarea{\n    margin: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: \'\';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n\n*,\n*:after,\n*:before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    :root {\n        /*scroll-behavior: smooth;*/\n    }\n}\n\nhtml {\n    -webkit-text-size-adjust: none;\n    -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-feature-settings: "kern";\n    -moz-font-feature-settings: "kern=1";\n    -moz-font-feature-settings: "kern";\n    -ms-font-feature-settings: "kern" 1;\n    font-feature-settings: "kern";\n    font-variant-numeric: normal;\n    word-wrap: break-word;\n}\n\ninput::-webkit-contacts-auto-fill-button {\n    visibility: hidden;\n    display: none !important;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n}\n\n::-webkit-credentials-auto-fill-button {\n    visibility: hidden;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n}\n\ninput::-ms-clear {\n    display: none !important;\n}\n\ninput::-ms-reveal {\n    display: none !important;\n}\n\ninput:focus::-webkit-input-placeholder,\ntextarea:focus::-webkit-input-placeholder {\n    color: transparent !important;\n}\n\ninput:focus::-moz-placeholder,\ntextarea:focus::-moz-placeholder {\n    color: transparent !important;\n}\n\ninput:focus:-moz-placeholder,\ntextarea:focus:-moz-placeholder {\n    color: transparent !important;\n}\n\ninput:focus::placeholder,\ntextarea:focus::placeholder {\n    color: transparent !important;\n}\n\nbutton {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    outline: none;\n    border-radius: 0;\n    cursor: pointer;\n\n    line-height: normal;\n\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n}\n\na {\n    outline: none;\n}\n\nbutton::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n\nsvg {\n    overflow: visible;\n}\n\n[tabindex="-1"]:focus:not(:focus-visible) {\n    outline: 0 !important;\n}\n',""]),n.exports=o},222:function(n,e,t){"use strict";t(163)},223:function(n,e,t){var o=t(99)(!1);o.push([n.i,"* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Helvetica', 'Arial', 'sans-serif';\n  -webkit-text-size-adjust: 100%;\n}\na,\na:hover,\na:after,\na:active,\na:focus {\n  color: #1d98dc;\n  text-decoration: none;\n  word-break: break-all;\n}\n",""]),n.exports=o},224:function(n){n.exports=JSON.parse('{"testnet":"TESTNET","networks":{"ton":{"transactionCompleted":"TON transaction completed successfully","transactionSendAmount":"Please send <AMOUNT> <FROM_COIN>s to bridge smart-contract","transactionSendFromPersonal":"Send from your personal wallet.","transactionSendNotFromExchanges":"Do not send directly from exchanges and bots!","errors":{"invalidAddress":"Not valid TON address"},"main":{"name":"TON Network","full":"TON Network","coin":"Toncoin","coinShort":"Toncoin"},"test":{"name":"TON Testnet","full":"TON Testnet","coin":"Toncoin","coinShort":"Toncoin"}},"eth":{"pageTitle":"TON-ETH Bridge","gasFee":"Ethereum gas fee ~ <FEE> ETH","transactionCompleted":"Ethereum transaction completed successfully","transactionWait":"Please wait for the Ethereum transaction to be processed","transactionSend":"Please send Ethereum transaction in Metamask","blocksConfirmations":"Collected <COUNT> Ethereum block confirmations","errors":{"invalidAddress":"Not valid ETH address","lowBalance":"You need to have ETH on your wallet to pay for gas in the Ethereum network"},"main":{"name":"Ethereum","full":"Ethereum Network","coin":"TONCOIN (ERC20)","coinShort":"TONCOIN"},"test":{"name":"Ethereum Goerli","full":"Ethereum Goerli","coin":"TONCOIN (ERC20)","coinShort":"TONCOIN"}},"bsc":{"pageTitle":"TON-BSC Bridge","gasFee":"BSC gas fee ~ <FEE> BNB","transactionCompleted":"BSC transaction completed successfully","transactionWait":"Please wait for the BSC transaction to be processed","transactionSend":"Please send BSC transaction in Metamask","blocksConfirmations":"Collected <COUNT> BSC block confirmations","errors":{"invalidAddress":"Not valid BSC address","lowBalance":"You need to have BNB on your wallet to pay for gas in the BSC network"},"main":{"name":"Binance Smart Chain","full":"BSC Network","coin":"TONCOIN (BEP-20)","coinShort":"TONCOIN"},"test":{"name":"BSC Testnet","full":"BSC Testnet","coin":"TONCOIN (BEP-20)","coinShort":"TONCOIN"}}},"amountOfTon":"Amount of TON:","addressInputLabel":"Address to receive in <NETWORK>:","bridgeFeeAbove10":"Bridge fee - <FEE> TON","bridgeFeeBelow10":"Bridge fee - 5 TON + 0.25% of amount","sourceCode":"Source Code","howItWorks":"How it works","documentation":"Documentation","transfer":"Transfer","getToncoin":"Get TONCOIN","done":"Done","cancel":"Cancel","blocksConfirmationsCollected":"The confirmations of the blocks are collected","blocksConfirmationsWaiting":"Wait a bit for the blocks confirmations","oraclesConfirmations":"Collected <COUNT> confirmations of oracles","oraclesConfirmationsCollected":"The confirmations of the oracles are collected","oraclesConfirmationsWaiting":"Wait a bit for the oracles to confirm the transfer","getCoinsByMetamask":"Get <TO_COIN>s by metamask","coinsSent":"<TO_COIN>s have been sent to your address","getCoins":"Get <TO_COIN>s in <TO_NETWORK>","errors":{"notValidAmount":"Amount is not valid number","amountBelow10":"Amount must be at least 10 TON","needPersonalAddress":"Please enter YOUR address to receive","toncoinBalance":"You have only <BALANCE> TONCOIN","installMetamask":"Please install MetaMask","wrongMetamaskNetwork":"Set chain to <NETWORK> in Metamask"}}')}},[[189,4,1,5]]]);