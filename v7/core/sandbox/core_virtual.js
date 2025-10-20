const core_virtual = class{
  contructor(callback,v_default) {
  const iframe = document.getElementById('sandbox');
  if (!iframe) {
  
  }

  // iframeが完全にロードされた後にコードを実行
  iframe.onload = function () {
    const iframeWindow = iframe.contentWindow;
    iframeWindow.safeGlobalVar = v_default;

    callback(iframeWindow);
  };

  // 環境をクリアするためにiframeをリロード
  iframe.src = 'about:blank';
}

};
export default core_virtual;
