/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/


/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
	console.log('Rodou!');
  chrome.app.window.create('tradutor.html', {
    id: "deafWindow",
    alwaysOnTop: true,
    innerBounds: {
      width: 300,
      height: 300,
      minWidth: 300,
      minHeight: 300
    }
  });
});
