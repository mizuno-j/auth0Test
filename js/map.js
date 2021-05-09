$(document).ready(function () {
  var agent = navigator.userAgent;
  if (agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1) {
    //iOSは標準のマップアプリ
    $(".map").attr("href", "https://maps.apple.com/place?address=%E3%80%92470-2102,%20%E6%84%9B%E7%9F%A5%E7%9C%8C%E7%9F%A5%E5%A4%9A%E9%83%A1%E6%9D%B1%E6%B5%A6%E7%94%BA,%20%E7%B7%92%E5%B7%9D%E5%AE%9D%E5%89%8D%E5%BA%B513-20&auid=352342773135303386&ll=34.986749,136.966817&lsp=9902&q=%E3%81%BF%E3%81%9A%E3%81%AE%E5%A1%BE&_ext=ChkKBAgEEAoKBAgFEAMKBQgGEKkBCgQIChAAEiYpbUN7nLp9QUAx7Yu/QMMeYUA56xih+OB+QUBBKSI+Ex0fYUBQBA%3D%3D&t=m");
  } else {
    //iOS以外はGoogleマップアプリ
    $(".map").attr("href", "https://www.google.com/maps/place/〒470-2102+愛知県知多郡東浦町緒川宝前庵%EF%BC%91%EF%BC%93−%EF%BC%92%EF%BC%90+みずの塾/@34.986749,136.966816,15z/data=!4m2!3m1!1s0x600482d9274540f5:0x88438edafaaf52f6");
  }
});
