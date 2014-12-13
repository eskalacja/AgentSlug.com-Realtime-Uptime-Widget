/*
* The MIT License (MIT)
*
* Copyright (c) 2014 Eskalacja, Szymon Nowicki 
* Source file of AgentSlug.com Realtime Uptime Widget
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

/**
 * This script is simply the very same script you can use with 
 * AgentSlug.com Realtime Uptime Widget service.
 * 
 * Feel free to get it, modify, use for your own purpose or treat as example.
 * 
 * If you like it, please check out our service as well.
 * 
 * @links:
 * #readme: (soon)
 * #demo: (soon)
 * 
 */
(function(){
    
    var protocol = 'http:';
    
    var settings = {
        iframe_url : protocol+'//agentslug.com/public/realtime/',
        h: 300,
        t: null
    };
    
    
    function AS_Realtime_Widget(id, hash, height, t) {
        this.target_id = id;
        if (!(this instanceof AS_Realtime_Widget)) {
            return new AS_Realtime_Widget(id,height);
        }
        this.data = null;
        if (hash !== undefined) {
            settings.hash = hash;
        }
        else {
            return false;
        }
        if (h !== undefined) {
            var h = parseInt(h);
            if (h > settings.h) {
                settings.h = h;
            }
        }
        if (t !== undefined) {
            settings.t = t;
        }
        
        this.buildWidget();
        
    }
    
    AS_Realtime_Widget.prototype.buildWidget = function(){
        var container = document.getElementById(this.target_id);
        var iframe = document.createElement('iframe');
        var get;
        get = '?iframe=1';
        get += '&height='+settings.h;
        if (settings.t) {
            get += '&t='+settings.t;
        }
        
        iframe.setAttribute('style', 'width:100%; max-width:500px; min-width:200px; border:none; min-height:20px; max-height:500px; height:'+settings.h+'px; overflow:hidden;');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('src', settings.iframe_url+settings.hash+get);
        container.appendChild(iframe);
    }
    function main(){
        var height, scriptTag, id, hash, t;
        var scriptTag = document.getElementsByTagName('script');
        scriptTag = scriptTag[scriptTag.length - 1];
        id = scriptTag.getAttribute('data-target');
        if (document.getElementById(id).getAttribute('data-hash') !== undefined && document.getElementById(id).getAttribute('data-hash')) {
            hash = document.getElementById(id).getAttribute('data-hash');
        }
        else {
            return false;
        }
        if (document.getElementById(id).getAttribute('data-height') !== undefined) {
            height = document.getElementById(id).getAttribute('data-height');
        }
        if (document.getElementById(id).getAttribute('data-title') !== undefined) {
            t = document.getElementById(id).getAttribute('data-title');
        }
        new AS_Realtime_Widget(id, hash, height, t);
    }
    main();
})();
