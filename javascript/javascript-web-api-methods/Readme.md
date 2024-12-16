# Documentation
- [**Javascript web APIs**](https://developer.mozilla.org/en-US/docs/Web/API)

# can you please list down all web api methods of javascript?

Here’s a comprehensive list of Web API methods in JavaScript, organized by categories. These APIs allow JavaScript to interact with the browser and perform various tasks like manipulating the DOM, handling events, and communicating with servers.

---

### **1. DOM Manipulation**
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.createElement()`
- `document.createTextNode()`
- `element.appendChild()`
- `element.removeChild()`
- `element.replaceChild()`
- `element.insertBefore()`
- `element.classList.add()`
- `element.classList.remove()`
- `element.classList.toggle()`
- `element.setAttribute()`
- `element.getAttribute()`
- `element.removeAttribute()`
- `element.innerHTML`
- `element.outerHTML`
- `element.textContent`
- `element.style`
- `element.scrollIntoView()`

---

### **2. Event Handling**
- `addEventListener()`
- `removeEventListener()`
- `dispatchEvent()`
- `preventDefault()`
- `stopPropagation()`

---

### **3. Fetching and Networking**
- `fetch()`
- `XMLHttpRequest`
- `navigator.sendBeacon()`
- `WebSocket` methods: 
  - `send()`
  - `close()`
- `EventSource`

---

### **4. Timers**
- `setTimeout()`
- `clearTimeout()`
- `setInterval()`
- `clearInterval()`
- `queueMicrotask()`

---

### **5. Browser Storage APIs**
- `localStorage.getItem()`
- `localStorage.setItem()`
- `localStorage.removeItem()`
- `localStorage.clear()`
- `sessionStorage.getItem()`
- `sessionStorage.setItem()`
- `sessionStorage.removeItem()`
- `sessionStorage.clear()`
- `indexedDB.open()`
- `indexedDB.transaction()`
- `indexedDB.createObjectStore()`

---

### **6. Geolocation API**
- `navigator.geolocation.getCurrentPosition()`
- `navigator.geolocation.watchPosition()`
- `navigator.geolocation.clearWatch()`

---

### **7. Web Workers**
- `new Worker()`
- `worker.postMessage()`
- `worker.terminate()`
- `self.onmessage`
- `importScripts()`

---

### **8. Canvas API**
- `canvas.getContext()`
- `context.fillRect()`
- `context.clearRect()`
- `context.drawImage()`
- `context.createLinearGradient()`
- `context.arc()`
- `context.beginPath()`
- `context.stroke()`
- `context.fillText()`

---

### **9. Audio/Video API**
- `HTMLMediaElement.play()`
- `HTMLMediaElement.pause()`
- `HTMLMediaElement.load()`
- `AudioContext.createBuffer()`
- `AudioContext.createGain()`
- `MediaRecorder.start()`
- `MediaRecorder.stop()`
- `MediaRecorder.pause()`

---

### **10. Notifications API**
- `Notification.requestPermission()`
- `new Notification()`

---

### **11. Device and Hardware Access**
- `navigator.getBattery()`
- `navigator.vibrate()`
- `navigator.mediaDevices.getUserMedia()`
- `navigator.mediaDevices.enumerateDevices()`
- `Bluetooth.requestDevice()`

---

### **12. Performance APIs**
- `performance.now()`
- `performance.mark()`
- `performance.measure()`
- `performance.getEntriesByType()`

---

### **13. Clipboard API**
- `navigator.clipboard.readText()`
- `navigator.clipboard.writeText()`

---

### **14. File API**
- `FileReader.readAsText()`
- `FileReader.readAsDataURL()`
- `FileReader.readAsArrayBuffer()`
- `FileReader.abort()`

---

### **15. Drag and Drop API**
- `event.dataTransfer.setData()`
- `event.dataTransfer.getData()`
- `event.preventDefault()`

---

### **16. Animation API**
- `element.animate()`
- `requestAnimationFrame()`
- `cancelAnimationFrame()`

---

### **17. Web Storage Events**
- `storage` event on `window`

---

### **18. Web Crypto API**
- `crypto.getRandomValues()`
- `crypto.subtle.digest()`

---

### **19. History and Navigation**
- `history.pushState()`
- `history.replaceState()`
- `history.back()`
- `history.forward()`
- `history.go()`

---

### **20. Miscellaneous**
- `navigator.onLine`
- `navigator.language`
- `window.open()`
- `window.close()`
- `window.alert()`
- `window.confirm()`
- `window.prompt()`
- `console.log()`
- `console.warn()`
- `console.error()`
- `console.table()`

---

This is not an exhaustive list but covers most of the commonly used Web APIs in JavaScript. You can explore additional specialized APIs as per your needs, such as WebGL, Payment APIs, or Machine Learning APIs (e.g., TensorFlow.js).

----
