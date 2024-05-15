<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>layui_exts/excel.js · Jeffrey-Wang/layui-excel - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://cn-assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://cn-assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" />
<link rel="canonical" href="https://gitee.com/wangerzi/layui-excel" />
<meta content='gitee.com/wangerzi/layui-excel git https://gitee.com/wangerzi/layui-excel.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='https://gitee.com/wangerzi/layui-excel/blob/master/layui_exts/excel.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='layui_exts/excel.js · Jeffrey-Wang/layui-excel - Gitee.com' itemprop='name' property='og:title'>
<meta content='简单快捷的导出插件，导出仅需一句话' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='简单快捷的导出插件，导出仅需一句话' itemprop='description' name='Description'>
<meta content='pc,mobile' name='applicable-device'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="oWMNapK6o/H9eJcnag1TriWJ2A+31aPtB+Nf6oFB0LTubi6asKhFeV81iVkGODluKUmcRArUtgw9Br3DdWSgUw==" />

<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/assets/application-1e5404b3e344301306468c0f1e2768f0.css" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","sdk_url":"https://cn-assets.gitee.com/assets/static/sensors-sdk-2f850fa5b654ad55ac0993fda2f37ba5.js","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":{"id":14373987,"name":"干勾于","username":"yuda-da","official":false,"admin":false,"avatar_url":"no_portrait.png#干勾于-yuda-da"}};gon.tour_env={"current_user":"yuda-da","action_name":"show","original_url":"https://gitee.com/wangerzi/layui-excel/blob/master/layui_exts/excel.js","controller_path":"blob"};gon.http_clone="https://gitee.com/wangerzi/layui-excel.git";gon.user_project="wangerzi/layui-excel";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/wangerzi/layui-excel/reactions";gon.ipipe_base_url="https://go-api.gitee.com";gon.artifact_base_url="https://go-repo.gitee.com";gon.gitee_go_remote_url="https://go.gitee.com/assets";gon.gitee_go_active=false;gon.current_project_is_mirror=false;gon.show_repo_comment=false;gon.diagram_viewer_path="https://diagram-viewer.giteeusercontent.com";gon.ref="master";
//]]>
</script>
<script src="https://cn-assets.gitee.com/assets/static/sensor-6269b9ad61bbcdaff20078e5dcff62d5.js"></script>
<script src="https://cn-assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://cn-assets.gitee.com/assets/application-eeeb0963395105e70ea28ab8daa4a528.js"></script>
<script src="https://cn-assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/assets/projects/application-46b94c31ba11ae8c37eacce2bdb5603e.css" />
<script src="https://cn-assets.gitee.com/assets/projects/app-28ac7648a2f60a4a1529d6db20e4f7f4.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content');
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1715756759",
      nonceStr: "e0ab707982fda4494f8615e0506b9535",
      signature: "f1c1adcce22ca7fa332cd448ed477960676cb69a",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/wangerzi/layui-excel/blob/master/layui_exts/excel.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/wangerzi/layui-excel/blob/master/layui_exts/excel.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://cn-assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu header-container'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'>
<a href="/yuda-da"><img class="ui avatar image yuda-da-avatar" avatar="干勾于-yuda-da" />
</a></div>
<div class='gitee-nav__info-box'>
<a href="/yuda-da">干勾于</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/yuda-da"><i class='iconfont icon-ic-dashboard'></i>
<span class='gitee-nav__sidebar-name'>个人主页</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/profile/account_information"><i class='iconfont icon-edit'></i>
<span class='gitee-nav__sidebar-name'>设置</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a rel="nofollow" data-method="delete" href="/logout"><i class='iconfont icon-ic-logout'></i>
<span class='gitee-nav__sidebar-name'>
退出
</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<!-- /todo 10周年活动结束后 恢复 -->
<div class='item gitosc-logo'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a title="开源" class="item " href="/explore">开源
</a><a title="企业版" class="item " sa_evt="click_GiteeCommunity_tab_En" href="/enterprises">企业版
</a><a title="高校版" class="item " href="/education">高校版
</a><a title="私有云" class="item" target="_blank" href="https://gitee.cn?utm_source=giteecom">私有云
</a><a title="Gitee AI" class="item mr-3" id="gitee-blog" target="_blank" href="https://ai.gitee.com/?utm_sources=site_nav">Gitee AI
<sup class='ui red label'>
NEW
</sup>
</a><div class='dropdown item ui' id='my-gitee-dropdown'>
<a href="/">我的</a>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui active dimmer inverted js-my-gitee-dropdown-loader'>
<div class='ui loader'></div>
</div>
<div class='header user-enterprises'>
<a class="pull-right" target="_blank" href="/yuda-da/dashboard/enterprises">全部</a>
企业
<span class='count'></span>
</div>
<div class='disabled item tip user-enterprises'>
无企业
</div>
<div class='header user-groups'>
<a class="pull-right" target="_blank" href="/yuda-da/dashboard/groups">全部</a>
组织
<span class='count'></span>
</div>
<div class='disabled item tip user-groups'>
无组织
</div>
<div class='header user-programs'>
项目
<span class='count'></span>
</div>
<div class='disabled item tip user-programs'>
<span class="translation_missing" title="translation missing: zh-CN.layouts.header.empty_programs">Empty Programs</span>
</div>
<div class='header user-projects'>
<a class="pull-right" target="_blank" href="/yuda-da/projects">全部</a>
仓库
<span class='count'></span>
</div>
<div class='disabled item tip user-projects'>
无项目
</div>
</div>
</div>
<div class='center responsive-logo'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar right-header' id='git-nav-user-bar'>
<form class="ui item" id="navbar-search-form" data-text-require="搜索关键字不能少于1个" data-text-filter="搜索格式不正确" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="type" id="navbar-search-type" />
<input type="hidden" name="fork_filter" id="fork_filter" value="on" />
<div class='ui search header-search'>
<input type="text" name="q" id="navbar-search-input" value="" class="prompt" placeholder="搜开源" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VGxSak1rNUVSVEZPTWtVelRtcE9iV0UzTmpObWE3NjNm",
      reponame = "wangerzi/layui-excel";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<div class='item ui dropdown empty' data-count-path='/notifications/unread_count' data-enable data-mark-notice-path='/notifications/mark' id='notice-dropdown'>
<a class="remind-button" href="/notifications"><i class='iconfont icon-remind'></i>
<div class='notice-count total'></div>
</a><div class='notice-dropdown-panel menu'>
<div class='notice-dropdown-panel-header'>
<div class='tab active' data-data-path='/notifications/notices?scope=referer' data-html-path='/notifications/referer' data-scope='referer'>
<div class='content'>
@ 我
<div class='notice-count referer'></div>
</div>
</div>
<div class='tab' data-data-path='/notifications/notices?scope=infos' data-html-path='/notifications/infos' data-scope='infos'>
<div class='content'>
通知
<div class='notice-count infos'></div>
</div>
</div>
<div class='tab' data-data-path='/notifications/notices?scope=messages' data-html-path='/notifications/messages' data-scope='messages'>
<div class='content'>
私信
<div class='notice-count messages'></div>
</div>
</div>
</div>
<div class='item notice-dropdown-panel-container'>
<div class='ui dimmer over active'>
<div class='ui loader'></div>
</div>
<div class='notice-list'></div>
<div class='notice-dropdown-panel-blank'>
暂没有新消息
</div>
</div>
<div class='notice-dropdown-panel-footer'>
<div class='action'>
<div class='side left'>
<a class="mark-notices" href="javascript: void(0);">当前标记为已读
</a></div>
<div class='side right'>
<a class="load-all" target="_blank" href="javascript: void(0);">查看全部
</a></div>
</div>
</div>
</div>
</div>

<div class='ui item' id='feature-update-notice'>
<div class='notice-update-icon'>
<a class="notice-update-popup click-knowed" title="" href="javascript:void(0)"><img alt="功能更新" title="" class="bubl_icon bubl-off-icon" src="https://cn-assets.gitee.com/assets/bulb_off-24ee940be20998aace89a3f040cbc704.svg" />
<img alt="功能更新" title="" class="bubl_icon bubl-on-icon" src="https://cn-assets.gitee.com/assets/bulb_on-3986b1dc417285398e3d15671bd8f261.svg" />
</a></div>
<div class='feature-update-notice-panel menu'>
<div class='notice-img'>
<img alt="" title="" class="notice-img-show" src="" />
</div>
<div class='notice-update-title'></div>
<div class='notice-update-des'></div>
<div class='notice-btn-list d-flex-between'>
<button name="button" type="button" class="ui basic orange button btn-notice btn-knowed click-knowed" style="margin-right: 0">我知道了</button>
<a class="ui button orange btn-notice btn-details click-knowed" target="_blank" href="">查看详情</a>
</div>
</div>
</div>

<div class='ui dropdown link item' id='git-nav-create'>
<i class='iconfont icon-add-thin'></i>
<div class='right menu'>
<a class="item" href="/projects/new"><i class='add square icon'></i>
新建仓库
</a><a class="item" href="/organizations/new"><i class='group icon'></i>
创建组织
</a><a class="item" sa_evt="click_GiteeCommunity_tab_plus_EnSignup" href="/enterprises/new"><i class='icon iconfont icon-enterprise'></i>
开通企业版
</a><a class="item" href="/projects/import/url"><i class='github icon'></i>
从 GitHub / GitLab 导入仓库
</a><a class="item" href="/yuda-da/codes/new"><i class='code icon'></i>
发布代码片段
</a></div>
</div>
<div class='ui dropdown item' id='git-nav-user'>
<img class="ui avatar image" avatar="干勾于-yuda-da" />
<i class='dropdown icon'></i>
<div class='right menu'>
<a class="item" href="/yuda-da"><i class='iconfont icon-ic-home'></i>
个人主页
</a><a class="item" href="/yuda-da/starred"><i class='iconfont icon-star'></i>
我的星选集
</a><a class="item" sa_evt="recommenderClick" sa_click_location="头像-成为推荐官" href="/profile/cps/overview"><img src="https://cn-assets.gitee.com/assets/cps_icon-9c17338b5d65451ce5190ddb75fce3c7.svg" alt="Cps icon" />
成为推荐官
</a><a class="item" href="/profile/account_information"><div class='mayun-icon my-ic-edit my-ic-edit-dims'></div>
设置
</a><div class='divider'></div>
<a class="item" target="_blank" href="https://help.gitee.com"><div class='mayun-icon my-ic-help my-ic-help-dims'></div>
帮助
</a><div class='divider'></div>
<a class="item destroy-user-session" rel="nofollow" data-method="delete" href="/logout"><div class='mayun-icon my-ic-exit my-ic-exit-dims'></div>
退出
</a></div>
</div>
<script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1713425033");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>
<div class='git-project-categories'>
<a href="/explore">开源项目</a>
<span class='symbol'>></span>
<a href="/explore/program-develop">程序开发</a>
<span class='symbol'>&gt;</span>
<a href="/explore/excel-utils">Excel工具包</a>
<span class='symbol and-symbol'>&&</span>
</div>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
该仓库未开启捐赠功能，可发送私信通知作者开启
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/notifications/messages/4967515?donate_project=wangerzi%2Flayui-excel'>发送私信</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>支付完成</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>确定</div>
<div class='ui blank cancel button'>取消</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a data-value="unwatch" class="item" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/unwatch"><i class='iconfont icon-msg-read'></i>
不关注
</a><a data-value="watching" class="item" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/watch"><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a data-value="releases_only" class="disabled item" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/release_only_watch"><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a data-value="ignoring" class="item" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/ignoring_watch"><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" title="57" href="/wangerzi/layui-excel/watchers">57
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button unstar " sa_evt="clickStar" sa_location="其他" sa_url="" sa_repo_id="5764157" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/unstar"><i class='iconfont icon-star-solid'></i>
Starred
</a><a class="ui button star " sa_evt="clickStar" sa_location="其他" sa_url="" sa_repo_id="5764157" data-remote="true" rel="nofollow" data-method="post" href="/wangerzi/layui-excel/star"><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " title="389" href="/wangerzi/layui-excel/stargazers">389
</a></span>
<span class='ui basic buttons fork-container' title=''>
<a id="fork-top-button" class="ui button fork " sa_evt="repoFork" sa_repo_id="5764157" sa_is_self="false" sa_is_member="false" href="#"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count " title="112" href="/wangerzi/layui-excel/members">112
</a></span>
</div>
<h2 class='git-project-title mt-0 mb-0'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a title="Jeffrey-Wang" class="author" href="/wangerzi">Jeffrey-Wang</a> / <a title="layui-excel" class="repository" target="" style="padding-bottom: 0px; margin-right: 4px" sa_evt="repoClick" sa_location="其他" sa_url="" sa_repo_id="5764157" href="/wangerzi/layui-excel">layui-excel</a></span><span class="project-badges"><a title="已被推荐" class="git-project-recommend-badge" href="/explore"><i class='iconfont icon-recommended'></i>
</a><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input type="hidden" name="recomm_at" id="recomm_at" value="2019-07-11 09:44" />
<input type="hidden" name="project_title" id="project_title" value="Jeffrey-Wang/layui-excel" />
</h2>
</div>
</div>
</div>
<div class='ui small modal long' id='modal-fork-project'>
<i class='icon-close iconfont close'></i>
<div class='header'>
Fork 仓库
</div>
<div class='content fork-project-content'>
<div class='fork-info-content'>
<div class='ui segment fork_project_loader'>
<div class='ui active inverted dimmer'>
<div class='ui text loader'>加载中</div>
</div>
</div>
</div>
</div>
<div class='actions fork-action d-flex-between hide'>
<div>
</div>
<div>
<a class='cancel'>&emsp;取消&emsp;</a>
<div class='ui disabled button orange ok'>&emsp;确认&emsp;</div>
</div>
</div>
</div>
<script>
  var title_import_url = "https://github.com/wangerzi/layui-excel";
  var title_post_url = "/wangerzi/layui-excel/update_import";
  var title_fork_url = "/wangerzi/layui-excel/sync_fork";
  var title_project_path = "layui-excel";
  var title_p_name = "layui-excel";
  var title_p_id= "5764157";
  var title_description = "简单快捷的导出插件，导出仅需一句话";
  var title_form_authenticity_token = "uS7yvyR/YGK2vMsyIBaoKGNHsIDrJP6n/Z6MSnRWCWT2I9FPBm2G6hTx1UxMI8Lob4f0y1Yl60bHe25jgHN5gw==";
  var watch_type = "unwatch";
  var checkFirst = false;
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
  $('.checkbox.sync-prune').checkbox();
  $('.checkbox.team-member-checkbox').checkbox();
</script>
<script>
  $(function () {
    // SemticUI 校验表单等地方要求直接return 值, 对异步支持非常不友好...
    // 从提交表单处 再用异步校验 ,控制是否提交
    var $modalFork = $('#modal-fork-project');
    var $okBtn = $modalFork.find('.ui.ok.button');
    var $currentTarget = null;
    var isSameProject = false;
  
    $('#fork-top-button, #fork-btm-button').on('click', function (e) {
      e.preventDefault();
      $modalFork.modal('show');
      setTimeout(function () {
        $.ajax({ url: '/wangerzi/layui-excel/fork_project_info' }).done(function () {
          // 自定义错误消息模板,  inline : true 每个输入框后面都插入消息提示, 而非集中到一处提醒
          $.fn.form.settings.templates.prompt = function (errors) {
            return $('<div />').addClass('ui error message custom prompt label').html(errors[0]);
          };
          // 表单的内容是异步传输的js动态生成的....
          var $repoForm = $('#modal-fork-project .repo-form');
          $repoForm.form({
            on: 'change',
            inline: true,
            fields: {
              projectName: {
                identifier: 'project-name',
                rules: [
                  {
                    type: 'empty',
                    prompt: "仓库名不能为空"
                  },
                  {
                    type: 'regExp',
                    value: window.giteeRegex.projectName,
                    prompt: "仓库名只允许包含中文、字母、数字或者下划线(_)、中划线(-)、英文句号(.)、加号(+)，必须以字母、数字或者点(.)开头，不能以下划线/中划线结尾，且长度为2~191个字符"
                  },
                  {
                    type: 'maxLength[255]',
                    prompt: "仓库名只允许包含中文、字母、数字或者下划线(_)、中划线(-)、英文句号(.)、加号(+)，必须以字母、数字或者点(.)开头，不能以下划线/中划线结尾，且长度为2~191个字符"
                  }
                ]
              },
              projectPath: {
                identifier: 'project-path',
                rules: [
                  {
                    type: 'empty',
                    prompt: "路径不能为空"
                  },
                  {
                    type: 'regExp',
                    value: window.giteeRegex.projectPath,
                    prompt: "路径只允许包含字母、数字或者下划线(_)、中划线(-)、英文句号(.)，必须以字母、数字或者点(.)开头，且长度为2~191个字符"
                  }
                ]
              }
            }
          });
  
          $modalFork.find('.namespace-img-area.ui.checkbox').checkbox({
            onChecked: function () {
              $currentTarget = $(this).closest('.ui.checkbox');
              // 当前选中的空间
              isSameProject = $currentTarget[0].hasAttribute('data-any-same-projects');
              var conflictProjectName = $currentTarget.data('conflict-project-title');
              var conflictProjectUrl = $currentTarget.data('conflict-project-url');
              var conflictProjectNameSpacePath = $currentTarget.data('conflict-namespace');
              var conflictPathType = $currentTarget.find('.path-type').text();
              // fork目标
              var targetProjectName = $currentTarget.data('target-project-name');
              var targetProjectPath = $currentTarget.data('target-project-path');
              // 命名空间名称(@xxx)
              var conflictNameSpaceName = $currentTarget.find('.path-name').text();
              var $forkTargetNamespace = $('.fork-target-namespace-area');
              var $forkTargetNamespaceItem = $(this).closest('.fork-target-namespace-item')
              // 冲突 显示修改表单
              if (isSameProject) {
                //$forkTargetNamespace.addClass('same-name-editing');
                $('.fork-target-namespace-item').removeClass('same-name-editing')
                $forkTargetNamespaceItem.addClass('same-name-editing')
                $forkTargetNamespace
                  .find('.conflict-namespace-name')
                  .attr('href', `/${conflictProjectNameSpacePath}`)
                  .text(conflictNameSpaceName);
                $forkTargetNamespace
                  .find('.conflict-path')
                  .attr('href', `${conflictProjectUrl}`)
                  .text(`${conflictProjectNameSpacePath}/${targetProjectPath}`);
                $forkTargetNamespace
                  .find('.prefix-path')
                  .text(`${window.location.origin}/${conflictProjectNameSpacePath}/`);
                $forkTargetNamespace
                  .find('.conflict-path-type')
                  .text(conflictPathType.toLowerCase())
                var $nameInput = $forkTargetNamespace.find('[name="project-name"]');
                var $pathInput = $forkTargetNamespace.find('[name="project-path"]');
                $nameInput.val(targetProjectName);
                $pathInput.val(targetProjectPath);
                checkFirst = true
                // 立即校验一次
                asyncValidateForkRepoForm();
              } else {
                $('.fork-target-namespace-item').removeClass('same-name-editing')
                $forkTargetNamespaceItem.addClass('same-name-editing');
              }
              $okBtn.removeClass('disabled');
            }
          });
        });
      }, 500);
    });
    // 异步校验
    function asyncValidateForkRepoForm (successCallback) {
      var $repoForm = $('#modal-fork-project .same-name-editing .repo-form');
      var $forkTargetNamespace = $('.fork-target-namespace-area .same-name-editing');
      var $nameInput = $forkTargetNamespace.find('[name="project-name"]');
      var $pathInput = $forkTargetNamespace.find('[name="project-path"]');
      var name = $nameInput.val().trim();
      var path = $pathInput.val().trim();
      var namespace = $currentTarget ? $currentTarget.data('conflict-namespace') : '';
      if (!name || !path) return;
      $okBtn.addClass('loading');
      $.ajax('/projects/check_fork_form', {
        type: 'get',
        data: { project_name: name, project_path: path, target_namespaces: namespace },
        success: function (data) {
          if (data.status == 0) {
            successCallback && successCallback();
          } else if (data.status == -1 && Array.isArray(data.conflict_keys)) {
            if (!checkFirst) {
              data.conflict_keys.includes('name') && $repoForm.form('add prompt', 'project-name', "已存在相同仓库名");
              data.conflict_keys.includes('path') && $repoForm.form('add prompt', 'project-path', "已存在相同路径");
            } else {
              data.conflict_keys.includes('name') && data.new_name && $nameInput.val(data.new_name);
              data.conflict_keys.includes('path') && data.new_path && $pathInput.val(data.new_path);
            }
          } else {
            Flash.error("校验失败");
          }
          checkFirst = false
        },
        error: function (err) {
          Flash.error(err.responseJSON.message);
        },
        complete: function () {
          $okBtn.removeClass('loading');
          // 添加提示 弹窗变高后 刷新弹窗位置
          $modalFork.modal('refresh');
        }
      });
    }
    function forkSubmit () {
      $modalFork.modal('hide');
      // 构造一些 input 用于表单提交
      var $form = $('<form></form>');
      var $input = $('<input type="hidden" name="authenticity_token" />');
      var $inputCheck = $('<input type="hidden" name="members" />');
      var $inputCheck2 = $('<input type="hidden" name="namespace_path" />');
      var checkedPath = $('.checkbox.checked > input[name=namespace_path]').val();
      // fork存在冲突, 修改后的表单:
      if (isSameProject) {
        // 获取最新表单数据
        var $forkTargetNamespace = $('.fork-target-namespace-area .same-name-editing');
        var name = $forkTargetNamespace.find('[name="project-name"]').val().trim();
        var path = $forkTargetNamespace.find('[name="project-path"]').val().trim();
        var $projectName = $('<input type="hidden" name="name" />');
        var $projectPath = $('<input type="hidden" name="path" />');
        $projectName.val(name);
        $projectPath.val(path);
        $form.append($projectName);
        $form.append($projectPath);
      }
      $form.hide();
      $form.attr('method', 'post');
      $form.attr('action', '/' + checkedPath + '/fork_project/wangerzi%2Flayui-excel');
      $input.attr('value', $('meta[name="csrf-token"]').attr('content'));
      $inputCheck.attr('value', $('.checkbox.checked > input[name=members]').val());
      $inputCheck2.attr('value', checkedPath);
      $form.append($input);
      $form.append($inputCheck);
      $form.append($inputCheck2);
      $form.appendTo('body');
      $form.submit();
    }
    $modalFork.modal({
      transition: 'fade',
      closable: true,
      centered: false,
      observeChanges:true,
      onApprove: function () {
        // 存在同名冲突时, 需要修改仓库信息, 再进行校验同名
        // 判断当前选中的空间类型, 用于决定是否需要修改路径仓库名,验证表单
        if (isSameProject) {
          var $repoForm = $('#modal-fork-project .same-name-editing .repo-form');
          $repoForm.form('validate form');
          var isRepoInfoValid = $repoForm.form('is valid'); // 前端校验通过
          // 由于是form提交和ajax检测结合..., 防止意外篡改 提交前必定校验一次, 通过后自动submit
          if (isRepoInfoValid) {
            // SemticUI add prompt 自定义验证连续执行太快, 会消失掉重复再出现再消失.
            setTimeout(function () {
              asyncValidateForkRepoForm(function () {
                forkSubmit();
              });
            }, 200);
          } else {
            $repoForm.form('validate form');
          }
        } else {
          // 正常 frok
          forkSubmit();
        }
        return false;
      }
    });
    $modalFork.find('.close-button').on('click', function () {
      $modalFork.modal('hide');
    });
  });
</script>
<style>
  i.loading, .icon-sync.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/wangerzi/layui-excel"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/wangerzi/layui-excel/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
12
</span>
</a><a class="item " href="/wangerzi/layui-excel/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/wangerzi/layui-excel/wikis"><i class='iconfont icon-wiki'></i>
Wiki
</a><a class="item  " href="/wangerzi/layui-excel/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><a class="item " href="/wangerzi/layui-excel/gitee_go"><i class='iconfont icon-workflow'></i>
流水线
</a><div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div>
<i class='iconfont icon-service'></i>
服务
<i class='dropdown icon'></i>
</div>
<div class='menu' style='display:none'>
<a class="item" href="/wangerzi/layui-excel/pages"><img src="/static/images/logo-en.svg" alt="Logo en" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/wangerzi/layui-excel/quality_analyses?platform=sonar_qube"><img src="https://cn-assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" alt="Sonar mini" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/wangerzi/layui-excel/gitee_scans"><img src="https://cn-assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" alt="Giteescan" />
<div class='item-title'>Gitee Scan</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4193"><img src="https://cn-assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" alt="Jenkins for gitee" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4318"><img src="https://cn-assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" alt="Cloudbase" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4330"><img src="https://cn-assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" alt="Cloud serverless" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" href="/wangerzi/layui-excel/open_sca"><img src="https://cn-assets.gitee.com/assets/open_sca/logo-9049ced662b2f9936b8001e6f9cc4952.png" alt="Logo" />
<div class='item-title'>
悬镜安全
</div>
</a><a class="item" target="_blank" href="https://help.gitee.com/devops/connect/Aliyun-SAE"><img src="https://cn-assets.gitee.com/assets/SAE-f3aa9366a1e2b7fff4747402eb8f10c3.png" alt="Sae" />
<div class='item-title'>
阿里云 SAE
</div>
</a><a class="item" id="update-codeblitz-link" target="_blank" href="https://codeblitz.cloud.alipay.com/gitee/wangerzi/layui-excel/tree/master/layui_exts/excel.js"><img style="width:100px;margin-top:4px" src="https://cn-assets.gitee.com/assets/Codeblitz-8824e38875a106e16e29ff57ec977b08.png" alt="Codeblitz" />
<div class='item-title'>
Codeblitz
</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
  var gitee_reward_config = JSON.parse(localStorage.getItem('gitee_reward_config') || null) || false
  var $settingText = $('.setting-text')
  // 如果没有访问过
  if(!gitee_reward_config) $settingText.addClass('red-dot')
  $('.git-project-service').dropdown({
    on: 'click',
    action: 'nothing',
    onShow: function () {
      const branch = 'master'
      let newUrl = `https://codeblitz.cloud.alipay.com/gitee/wangerzi/layui-excel/tree/`
      const url = decodeURIComponent(window.location.pathname);
      const startIndex = url.indexOf('master');
      if (startIndex !== -1) {
        newUrl = newUrl + url.substring(startIndex); // 从分支名开始截取
      }else{
        newUrl = newUrl + branch
      }
      const linkElement = document.getElementById("update-codeblitz-link");
      linkElement.setAttribute("href", newUrl);
    },
  })
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = true
  isClickGuide = true
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/wangerzi/layui-excel/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>

<div class='git-project-content-wrapper'>

<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<script>
  $('.git-project-desc-wrapper .ui.dropdown').dropdown();
  if (false) {
    gon.project_new_blob_path = "/wangerzi/layui-excel/new/master/layui_exts/excel.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $(".project-admin-action-box .reject").click(function() {
    var reason = $('[name=review-reject-reason]').val();
    if (!reason) {
      Flash.error('请选择不通过理由')
      return
    }
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        reason: reason,
        status: 'rejected',
        project_id: 5764157
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $(".project-admin-action-box .approve").click(function(){
  
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        status: 'approved',
        project_id: 5764157
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $(".project-admin-action-box .waiting").click(function(){
  
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        status: 'waiting',
        project_id: 5764157
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_5764157", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input type="hidden" name="path" id="path" value="layui_exts/excel.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input type="hidden" name="ref" id="ref" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon input'>
<i class='iconfont icon-search dropdown-search-icon'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu project-branch-tab-menu'>
<div class='tab-menu-actions d-align-center'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/wangerzi/layui-excel/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/wangerzi/layui-excel/tags">管理</a>
</div>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (23)
</div>
<div class='tab-menu-item' data-placeholder='搜索标签' data-tab='tags'>
标签 (17)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches' id='branches_panel'>
<div data-value="master" class="item"><span>master</span></div>
<div data-value="feat-image-export" class="item"><span>feat-image-export</span></div>
<div data-value="release-1.8.2" class="item"><span>release-1.8.2</span></div>
<div data-value="dependabot/npm_and_yarn/jszip-3.8.0" class="item"><span>dependabot/npm_and_yarn/jszip-3.8.0</span></div>
<div data-value="dependabot/npm_and_yarn/debug-4.2.0" class="item"><span>dependabot/npm_and_yarn/debug-4.2.0</span></div>
<div data-value="dependabot/npm_and_yarn/decode-uri-component-0.2.2" class="item"><span>dependabot/npm_and_yarn/decode-uri-component-0.2.2</span></div>
<div data-value="dependabot/npm_and_yarn/loader-utils-1.4.2" class="item"><span>dependabot/npm_and_yarn/loader-utils-1.4.2</span></div>
<div data-value="gh-pages" class="item"><span>gh-pages</span></div>
<div data-value="dependabot/npm_and_yarn/jszip-3.7.0" class="item"><span>dependabot/npm_and_yarn/jszip-3.7.0</span></div>
<div data-value="feat-xlsx-upgrade" class="item"><span>feat-xlsx-upgrade</span></div>
<div data-value="feat-hmr" class="item"><span>feat-hmr</span></div>
<div data-value="dependabot/npm_and_yarn/elliptic-6.5.4" class="item"><span>dependabot/npm_and_yarn/elliptic-6.5.4</span></div>
<div data-value="feat-webpack" class="item"><span>feat-webpack</span></div>
<div data-value="feat-npm-webpack" class="item"><span>feat-npm-webpack</span></div>
<div data-value="bugfix-setExportCellStyle" class="item"><span>bugfix-setExportCellStyle</span></div>
<div data-value="task-文档变更" class="item"><span>task-文档变更</span></div>
<div data-value="task-时间转换" class="item"><span>task-时间转换</span></div>
<div data-value="task-边框设置辅助函数" class="item"><span>task-边框设置辅助函数</span></div>
<div data-value="task-导入兼容IE11" class="item"><span>task-导入兼容IE11</span></div>
<div data-value="task-v1.5批量设置样式" class="item"><span>task-v1.5批量设置样式</span></div>
</div>
<div class='tab scrolling menu' data-tab='tags' id='tags_panel'>
<div class='item' data-value='v1.8.3'>v1.8.3</div>
<div class='item' data-value='v1.8.1'>v1.8.1</div>
<div class='item' data-value='v1.7.6'>v1.7.6</div>
<div class='item' data-value='v1.7.5'>v1.7.5</div>
<div class='item' data-value='v1.7.3'>v1.7.3</div>
<div class='item' data-value='v1.7.2'>v1.7.2</div>
<div class='item' data-value='v1.6.6'>v1.6.6</div>
<div class='item' data-value='v1.6.5'>v1.6.5</div>
<div class='item' data-value='v1.6.4'>v1.6.4</div>
<div class='item' data-value='v1.6.3'>v1.6.3</div>
<div class='item' data-value='v1.6.2'>v1.6.2</div>
<div class='item' data-value='v1.6.1'>v1.6.1</div>
<div class='item' data-value='v1.6'>v1.6</div>
<div class='item' data-value='v1.5'>v1.5</div>
<div class='item' data-value='v1.4'>v1.4</div>
<div class='item' data-value='v1.3'>v1.3</div>
<div class='item' data-value='v1.1-release'>v1.1-release</div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
  .dropdown-search-icon {
    position: absolute;
    top: 8px;
    left: 11px;
  }
</style>
<style>
  #git-project-branch .project-branch-tab-menu {
    width: 400px !important;
    margin: 0 16px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    border-bottom: 1px solid #dfe3e9 !important; }
  #git-project-branch .tab-menu-actions {
    position: absolute;
    right: 0px !important;
    bottom: 0.357em; }
  #git-project-branch .tab-menu-action {
    position: relative !important;
    right: 0px !important;
    bottom: 0px !important; }
  #git-project-branch .menu::after {
    display: none !important; }
</style>
<script>
  var $branchesDropdown = $('#branches_panel');
  var $tagsDropdown = $('#tags_panel');
  var $searchNameInput = $('.search-branch');
  var concurrentRequestLock = false;
  var filterXSS = window.filterXSS;
  var search_text = "";
  var branch_page_number = 1;
  var branch_total_pager = Math.ceil(23 / 20) || 1
  
  var flag_is_loading = false;
  var flag_page_number = 1;
  var flag_total_pager = Math.ceil(17 / 20) || 1
  
  $branchesDropdown.scroll(function() {
    var branchesPanel = document.getElementById('branches_panel');
    var numOfBranches = $branchesDropdown.children().length;
    if (branchesPanel.clientHeight + branchesPanel.scrollTop + 37 > branchesPanel.scrollHeight && numOfBranches < 23) {
      debounceLoadMoreBranches.call();
    }
  });
  function resetFlagVal() {
    flag_is_loading = false;
    flag_page_number = 1;
    flag_total_pager = 1;
  
    concurrentRequestLock = false
    search_text = "";
    branch_page_number = 1;
    branch_total_pager = 1
  }
  $searchNameInput.on('input', window.globalUtils.debouce(function (e) {
    resetFlagVal()
    var $currentTab = $('.tab-menu-action.active');
    var numOfBranches = $branchesDropdown.children().length;
    var searchWord = $searchNameInput.val().trim();
    search_text = searchWord
    if($currentTab.data('tab') === 'branches') {
      if (searchWord !== "") {
        loadData(searchWord,1);
      } else {
        loadData();
      }
    }
    var numOfTags = $tagsDropdown.children().length;
    if($currentTab.data('tab') === 'tags') {
      if (searchWord !== "") {
        fetchTags(searchWord,1);
      } else {
        fetchTags();
      }
    }
  }, 500));
  
  function toggleNoResultView($popPanel) {
    let no_data_html= `<div class='mt-1 mb-1 d-flex-center'> <span>暂无数据</span> </div>`
    $popPanel.append(no_data_html)
  }
  var debounceLoadMoreBranches = window.globalUtils.debouce(function () {
    if (concurrentRequestLock) return;
    branch_page_number += 1;
    if (branch_page_number > branch_total_pager) return;
    loadData(search_text, branch_page_number);
  }, 350);
  
  function loadData(search, page) {
    if (concurrentRequestLock) { return; }
    concurrentRequestLock = true;
  
    var searchParams = search || "";
    var pageParams = page || 1;
    $.ajax({
      url: "/" + gon.user_project + "/branches/names.json",
      type: 'GET',
      data: {
        search: searchParams,
        page: pageParams,
      },
      dataType: 'json',
      success: function (data) {
        branch_total_pager = data.total_pages;
        var html = '';
  
        if (pageParams === 1) {
          $branchesDropdown.empty();
        }
        data.branches.forEach(function (branch) {
          var protectRule = '';
          var branchName = filterXSS(branch.name);
          if(branch.branch_type.value === 1) {
            var rule = filterXSS(branch.protection_rule.wildcard);
            protectRule = `<i
                class="iconfont icon-shieldlock protected-branch-popup"
                data-title="受保护分支"
                data-content='保护规则： ${rule}'
              >
              </i>`
          }
          html += `<div data-value='${branchName}' class="item">
                    <span>${branchName}</span> ${protectRule}
                    </div>`
        });
        $branchesDropdown.append(html);
        $('.protected-branch-popup').popup()
        if (pageParams === 1 && data.count === 0) {
          toggleNoResultView($branchesDropdown);
        }
      },
      complete: function () {
        concurrentRequestLock = false;
      }
    });
  }
  
  
  
  $tagsDropdown.scroll(function() {
    var tagsPanel = document.getElementById('tags_panel');
    var numOfTags = $tagsDropdown.children().length;
    if (tagsPanel.clientHeight + tagsPanel.scrollTop + 37 > tagsPanel.scrollHeight && numOfTags < 17) {
      debounceLoadMore.call();
    }
  });
  var debounceLoadMore = window.globalUtils.debouce(function () {
    if (flag_is_loading) return;
    flag_page_number += 1;
    if (flag_page_number > flag_total_pager) return;
    fetchTags(search_text, flag_page_number);
  }, 350);
  
  function fetchTags(search, page) {
    var searchParams = search || "";
    var pageParams = page || 1;
  
    if (flag_is_loading) return;
    flag_is_loading = true;
  
    $.ajax({
      url: "/" + gon.user_project + "/tags/names.json",
      data: {
        search: searchParams,
        page: pageParams,
      },
      type: "GET",
      xhrFields: {
        withCredentials: true,
      },
      success: function (data) {
        flag_total_pager = data.total_pages;
        if (pageParams === 1) {
          $tagsDropdown.html('');
        }
        data.tags.forEach((tag) => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
          itemDiv.setAttribute('data-value', tag.name);
          itemDiv.innerText = window.filterXSS(tag.name);
          $tagsDropdown.append(itemDiv)
        });
        if (pageParams === 1 && data.count === 0) {
          toggleNoResultView($tagsDropdown);
        }
      },
      error: function () {
      },
      complete: function () {
        flag_is_loading = false;
      },
    });
  }
  $('.project-branch-tab-menu').on('click','.tab-menu-item', function (e) {
    var $currentTab = $(this).data('tab')
    if($currentTab === 'branches') {
      $searchNameInput.val('')
      search_text = '';
      loadData()
    }
    if($currentTab === 'tags') {
      $searchNameInput.val('')
      search_text = '';
      fetchTags();
    }
  })
</script>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: false,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        }
        var path = $('#path').val();
        var href = ['/wangerzi/layui-excel/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='ui small modal' id='git-project-download-panel'>
<i class='iconfont icon-close close'></i>
<div class='header'>
克隆/下载
</div>
<div class='content'>
<div class='ui secondary pointing menu mb-2 menu-container'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/wangerzi/layui-excel.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:wangerzi/layui-excel.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/wangerzi/layui-excel/settings#function&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/wangerzi/layui-excel/settings#function&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
<a class="button-box ui basic orange button" sa_evt="repoDownload" sa_repo_id="5764157" sa_is_self="false" sa_is_member="false" href="/wangerzi/layui-excel/repository/archive/master.zip"><i class='icon download'></i>
下载ZIP
</a></div>
<div class='ui fluid right labeled small input download-url-panel mb-2'>
<input type="text" name="project_url_clone" id="project_url_clone" value="https://gitee.com/wangerzi/layui-excel.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#project_url_clone' id='btn-copy-project_clone_url1'></i>
</div>
</div>
<div class='tip-box mb-2'>
提示
</div>
<div class='mb-1 clone-url-title'>
下载代码请复制以下命令到终端执行
</div>
<div class='ui fluid right labeled small input download-url-panel mb-2'>
<input type="text" name="project_clone_url" id="project_clone_url" value="https://gitee.com/wangerzi/layui-excel.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#project_clone_url' id='btn-copy-project_clone_url'></i>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<div class='http-ssh-item mb-2'>
<div>
为确保你提交的代码身份被 Gitee 正确识别，请执行以下命令完成配置
</div>
<div class='textarea-box mt-2'>
<textarea class='textarea-content-box' id='global-config-clone' readonly>git config --global user.name '干勾于' &#10git config --global user.email '14373987+yuda-da@user.noreply.gitee.com'</textarea>
<i class='icon iconfont icon-clone mr-2 btn-copy-clone text-dark' data-clipboard-target='#global-config-clone' id='btn-copy-global-config'></i>
</div>
</div>
<div class='ssh-item item-panel-box'>
<div class='mb-2'>
初次使用 SSH 协议进行代码克隆、推送等操作时，需按下述提示完成 SSH 配置
</div>
<div class='mb-1'>
<span>1</span>
生成 RSA 密钥
</div>
<div class='ui fluid right labeled small input mb-2'>
<input type="text" name="ssh_keygen_clone" id="ssh_keygen_clone" value="ssh-keygen -t rsa" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#ssh_keygen_clone' id='btn-copy-ssh_keygen'></i>
</div>
</div>
<div class='mb-1'>
<span>2</span>
获取 RSA 公钥内容，并配置到<a href='/profile/sshkeys' target="_blank"> SSH公钥 </a> 中
</div>
<div class='ui fluid right labeled small input mb-2'>
<input type="text" name="id_rsa_clone" id="id_rsa_clone" value="cat ~/.ssh/id_rsa.pub" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#id_rsa_clone' id='btn-copy-d_rsa'></i>
</div>
</div>
</div>
<div class='svn-item item-panel-box'>
<div class='mb-1 mt-2'>
在 Gitee 上使用 SVN，请访问<a href='https://help.gitee.com/enterprise/code-manage/%E4%BB%A3%E7%A0%81%E6%89%98%E7%AE%A1/%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93/Gitee%20SVN%E6%94%AF%E6%8C%81' target="_blank"> 使用指南 </a>
</div>
</div>
<div class='http-item item-panel-box'>
<div class='mb-2 mt-2'>
使用 HTTPS 协议时，命令行会出现如下账号密码验证步骤。基于安全考虑，Gitee 建议<a href='/profile/personal_access_tokens' target="_blank"> 配置并使用私人令牌 </a>替代登录密码进行克隆、推送等操作
</div>
<div>
Username for 'https://gitee.com': yuda-da
</div>
<div class='mb-1'>
<span>
Password for 'https://yuda-da@gitee.com':
</span>
<span>
私人令牌
</span>
</div>
</div>
</div>
</div>
<style>
  #git-project-download-panel {
    top: 90px !important; }
    #git-project-download-panel input {
      color: #40485b !important; }
    #git-project-download-panel .textarea-box {
      width: 100%;
      height: 60px;
      color: #9d9d9d;
      border-radius: 2px;
      background-color: #F5F5F5 !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center; }
    #git-project-download-panel .menu-container {
      font-weight: bold;
      border-color: rgba(0, 0, 0, 0.1) !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important; }
      #git-project-download-panel .menu-container .item {
        padding: 7px 12px !important; }
    #git-project-download-panel .hr-item {
      color: rgba(39, 41, 43, 0.15) !important; }
    #git-project-download-panel .textarea-content-box {
      width: 100%;
      height: 60px;
      resize: none;
      border: 0px !important;
      background-color: #F5F5F5 !important;
      color: #40485b !important; }
    #git-project-download-panel .btn-copy-clone {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.87) !important; }
    #git-project-download-panel .copy-icon-box {
      background-color: #F5F5F5 !important;
      border-left: 0px !important; }
    #git-project-download-panel .button-box {
      border: 0px !important;
      float: right !important;
      padding-right: 0 !important; }
    #git-project-download-panel .tip-box {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
      padding-bottom: 4px;
      font-weight: 700; }
    #git-project-download-panel .popup-container {
      padding: 8px 12px 4px 12px;
      text-align: center;
      font-size: 14px; }
      #git-project-download-panel .popup-container .ok {
        margin: 12px auto;
        width: 25%;
        min-width: 125px;
        display: block; }
      #git-project-download-panel .popup-container .cancel {
        margin-left: 0; }
</style>
<script>
  $(function () {
    var $btnClone = $('#btn-dl-or-clone')
    var $modalDownload = $('#git-project-download-panel');
    var $input = $('#project_clone_url')
    var $inputUrl = $('#project_url_clone')
    var cloneUrlTitle= $('.clone-url-title')
  
    $('#btn-dl-or-clone').on('click', function (e) {
      e.preventDefault();
      $modalDownload.modal('show');
    })
  
    $modalDownload.find('.menu > .item').on('click', function(e) {
      var $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      var dataUrl = $item.attr('data-url');
      var cloneUrl = $item.attr('data-url');
      var dataType = $item.attr('data-type')
      var cloneToLocal = '下载代码请复制以下命令到终端执行'
      if(dataType=='http'){
        $modalDownload.find('.http-item').show();
        $('.content > .item-panel-box:not(.http-item)').hide();
        $modalDownload.find('.http-ssh-item').show();
        cloneUrl = 'git clone '+dataUrl
      }else if(dataType=='ssh'){
        $modalDownload.find('.ssh-item').show();
        $('.content > .item-panel-box:not(.ssh-item)').hide();
        $modalDownload.find('.http-ssh-item').show();
        cloneUrl = 'git clone '+dataUrl
      }else if(dataType=='svn') {
        $('.content > .item-panel-box:not(.svn-item)').hide();
        $modalDownload.find('.svn-item').show();
        $modalDownload.find('.http-ssh-item').hide();
        cloneUrl = 'svn checkout '+dataUrl
      }else {
        $('.content > .item-panel-box:not(.svn-item)').hide();
        $modalDownload.find('.svn-item').show();
        $modalDownload.find('.http-ssh-item').hide();
        cloneUrl = 'svn checkout '+dataUrl
      }
      if (dataUrl) {
        $modalDownload.find('.download-url-panel').show();
        $input.val(cloneUrl);
        $inputUrl.val(dataUrl)
        cloneUrlTitle.show();
        $modalDownload.find('.forbid-warning-text').html('');
      } else {
        $modalDownload.find('.download-url-panel').hide();
        //$modalDownload.find('.svn-item').hide();
        cloneUrlTitle.hide();
        $modalDownload.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      $.cookie('remote_way', $item.attr('data-type'), { expires: 365, path: '/' });
    }).filter('[data-type="' + ($.cookie('remote_way') || 'http') + '"]').trigger('click');
  
    $('.btn-copy-clone').popup({
      content: '点击复制',
    }).on('click', function(e) {
      e.stopPropagation();
      return false;
    }).each(function(_, btnCopy) {
      var $btnCopy = $(btnCopy);
      new Clipboard(btnCopy).on('success', function() {
        $btnCopy.popup('destroy').popup({
          content: '已复制',
          on: 'manual'
        }).popup('show');
        setTimeout(function() {
          $btnCopy.popup('destroy').popup({
            content: '点击复制'
          });
        }, 2000);
      });
    });
    var $downloadBtn= $('.unlogin-download-btn')
    var $popupContainer = $('.popup-container')
    $downloadBtn.popup({
      popup : $('.custom.popup'),
      position   : 'bottom right',
    }).on('click', function(e) {
      $downloadBtn.popup('destroy').popup({
        popup : $('.custom.popup'),
        on: 'manual',
        position   : 'bottom right',
      }).popup('show');
      setTimeout(function() {
        $downloadBtn.popup('hide');
      }, 2000);
  
    })
  })
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<div class='ui horizontal list repo-action-list d-flex d-align-center repo-action-list-right'>
<div class='item search-box-container'>
<div class='ui icon input search-input' id='search-box'>
<input class='search-file-name' id='search-file-name' maxlength='40' placeholder='搜索文件' type='text'>
</div>
<a class='d-flex d-align-center' id='search-file-btn'>
<span class='iconify' data-icon='gitee:search' style='font-size: 16px;color:#979CAC;margin-right:10px'></span>
</a>
<div class='filter-file-container' style='display: none;'></div>
</div>
<script>
  $('#git-tree-file').dropdown({
    action: 'hide',
    onHide: function () {
      $('.plus-box').removeClass('click-active')
    },
    onShow: function () {
      $('.plus-box').addClass('click-active')
    }
  });
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-submodule').popup({
    content: "只读目录不允许创建子模块",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly, .disabled-create-folder, .disabled-create-file, .disabled-create-submodule').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder, .disabled-create-submodule {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>

<div class='item toschina-content__hidden webIDE-box' data-content='Web IDE'>
<a class="ui d-flex d-align-center webide ml-1" target="_blank" href="/-/ide/project/wangerzi/layui-excel/edit/master/-/layui_exts/excel.js"><span class='iconify' data-icon='gitee:computer' style='font-size: 16px;color:#979CAC;margin-right:12px'></span>
</a></div>
</div>
<script>
  $('.webIDE-box').popup()
</script>
<script src="https://cn-assets.gitee.com/assets/file_search/app-7488efdce7782c80c4936145b910d07e.js"></script>

</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a data-direction="back" class="section repo-name" style="font-weight: bold" href="/wangerzi/layui-excel/tree/master">layui-excel
</a><div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/wangerzi/layui-excel/tree/master/layui_exts"><span class='cblue'>
layui_exts
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
excel.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='layui_exts/excel.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/wangerzi/layui-excel/branches"><i class='iconfont icon-branches'></i>
分支 23
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/wangerzi/layui-excel/tags"><i class='iconfont icon-tag'></i>
标签 17
</a></div>
</div>
</div>
<script src="https://cn-assets.gitee.com/webpacks/parse_blob_form_scheme-c196873aa4bc8cd09e53.bundle.js"></script>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
   // 仓库页面切换路径时: 刷新 yaml 错误检查
  $(window).on('pjax-complete:file-show', function () {
    window.parseBlobFormScheme && window.parseBlobFormScheme($('.js-blob-data').data('blob'));
  });
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='excel.js'>
excel.js
</span>
<small>1.05 MB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>
<a class="ui button edit-raw" target="_blank" href="/wangerzi/layui-excel/raw/master/layui_exts/excel.js">原始数据</a>
<a class="ui button edit-history" href="/wangerzi/layui-excel/commits/master/layui_exts/excel.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly, .disabled-edit-status').click(function() {
    return false
  })
  $('.has_tooltip').popup({
    position: 'top center'
  });
</script>
<style>
  .disabled-edit-readonly, .disabled-edit-status {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    cursor: default !important; }
  
  .drawio-iframe-code-card {
    position: relative; }
    .drawio-iframe-code-card textarea {
      width: 100%;
      height: 140px;
      resize: none; }
    .drawio-iframe-code-card .icon-clone {
      position: absolute;
      right: 32px;
      bottom: 32px; }
    .drawio-iframe-code-card iframe {
      border-radius: 2px;
      border: 1px solid #DEDEDF; }
</style>
</div>
</div>
<div class='blob-header-title mt-1 ubblock_tip'>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card " data-username="wangerzi" href="/wangerzi">Jeffrey-Wang</a>
<span>提交于</span>
<span class='timeago commit-date' title='2023-05-08 23:17:57 +0800'>
2023-05-08 23:17
</span>
.
<a href="/wangerzi/layui-excel/commit/fcb1bc26a6b29774f919d4921a688c2ed4582d55">feat: support image export</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file-is-too-large-to-display'>
此文件太大，不适合在网页上显示
</div>
<div class='file_content blob_file'>
<center>
<a href="/wangerzi/layui-excel/raw/master/layui_exts/excel.js"><div class='padded'>
<h4>
<i class='icon-download-alt'></i>
<br>
下载 (1.05 MB)
</h4>
</div>
</a></center>
</div>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

<div class='ui small modal' id='misjudgment_appeal_modal'>
<i class='close icon'></i>
<div class='header dividing ui'>
误判申诉
</div>
<div class='content'>
<p>此处可能存在不合适展示的内容，页面不予展示。您可通过相关编辑功能自查并修改。</p>
<p>如您确认内容无涉及 不当用语 / 纯广告导流 / 暴力 / 低俗色情 / 侵权 / 盗版 / 虚假 / 无价值内容或违法国家有关法律法规的内容，可点击提交进行申诉，我们将尽快为您处理。</p>
<div class='buttons'>
<div class='ui button blank cancel'>取消</div>
<div class='ui button orange submit'>提交</div>
</div>
</div>
</div>
<style>
  #misjudgment_appeal_modal .buttons {
    float: right;
    margin-top: 30px;
    margin-bottom: 20px; }
    #misjudgment_appeal_modal .buttons .cancel {
      margin-right: 20px; }
</style>
<script>
  var $misjudgmentAppealModal = $('#misjudgment_appeal_modal');
  $('.cancel').on('click',function(){
    $misjudgmentAppealModal.modal('hide');
  });
  var $jsSubmitAppeal = $misjudgmentAppealModal.find('.submit')
  $jsSubmitAppeal.on('click', function(e) {
    e.preventDefault();
    $(this).addClass('loading').addClass('disabled');
    var type = $(this).attr('data-type');
    var id = $(this).attr('data-id');
    var projectId = $(this).attr('data-project-id');
    var appealType = $(this).attr('data-appeal-type');
    $.ajax({
      type: "PUT",
      url: "/misjudgment_appeal",
      data: {
        type: type,
        id: id,
        project_id: projectId,
        appeal_type: appealType
      },
      success: function(data) {
        Flash.info('提交成功');
        $jsSubmitAppeal.removeClass('loading');
        $misjudgmentAppealModal.modal('hide');
        location.reload()
      },
      error: function(e) {
        Flash.error('提交失败:'+e.responseText);
        $jsSubmitAppeal.removeClass('loading').removeClass('disabled');
        location.reload()
      }
    });
  })
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content'>
<span class='git-project-desc-text'>简单快捷的导出插件，导出仅需一句话</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='blank d-flex d-flex-between dropdown item js-project-label_show label-list-line-feed project-label-list ui' data-labels='[]' data-url='/wangerzi/layui-excel/update_description'>
<div class='mixed-label'>
</div>

<div class='default'>暂无标签</div>
</div>
<div class='item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a rel="nofollow" id="homepage" target="_blank" href="http://excel.wj2015.com">http://excel.wj2015.com</a>
</span>
</div>
<div class='item'>
<i class='iconfont icon-tag-program'></i>
<span class='summary-languages'>
JavaScript
<span class='text-muted'>
等 2 种语言
<i class='icon dropdown'></i>
</span>
</span>
<div class='ui popup summary-languages-popup'>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=JavaScript">JavaScript</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 99.4%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=JavaScript">99.4%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=HTML">HTML</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 0.6%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=HTML">0.6%</a>
</div>
</div>
</div>

<div class='item box-licence'>
<i class='iconfont icon-licence'></i>
<span id='license-popup'>
Apache-2.0
</span>
<div class='ui popup dark'>使用 Apache-2.0 开源许可协议</div>
</div>
</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item compass'>
<div class='header mb-1 d-align-center'>
<h4 class='limit-length compass-label mr-1'></h4>
<a class="ui link button compass-qa" href="https://compass.gitee.com/zh/docs/dimensions-define"><i class='iconfont icon-help-circle'></i>
</a></div>
<div class='content'>
<div class='compass-echart-container'>
<div data-url='/wangerzi/layui-excel/compass/chart_data' id='compass-metrics'>
<div class='wrap'></div>
<div class='ui popup radar-popup'>
<h4 class='title'>开源评估指数源自 OSS-Compass 评估体系，评估体系围绕以下三个维度对项目展开评估：</h4>
<div class='project-radar-list'>
<div class='descript-contianer'>
<div class='descript-title'>
<p class='mb-1'>1. 开源生态</p>
<ul class='mb-1 mt-1'>
<li>生产力：来评估开源项目输出软件制品和开源价值的能力。</li>
<li>创新力：用于评估开源软件及其生态系统的多样化程度。</li>
<li>稳健性：用于评估开源项目面对多变的发展环境，抵御内外干扰并自我恢复的能力。</li>
</ul>
<p>2. 协作、人、软件</p>
<ul>
<li>协作：代表了开源开发行为中协作的程度和深度。</li>
<li>人：观察开源项目核心人员在开源项目中的影响力，并通过第三方视角考察用户和开发者对开源项目的评价。</li>
<li>软件：从开源项目对外输出的制品评估其价值最终落脚点。也是开源评估最“古老”的主流方向之一“开源软件” 的具体表现。</li>
</ul>
<p>3. 评估模型</p>
<ul>
基于“开源生态”与“协作、人、软件”的维度，找到与该目标直接或间接相关的可量化指标，对开源项目健康与生态进行量化评估，最终形成开源评估指数。
</ul>
</div>
</div>
</div>
<div class='finaltime'></div>
</div>
<div class='legend-box ml-1'>
<div class='dimension d-flex'></div>
<div class='compass-type d-flex'></div>
</div>
</div>
</div>
<script src="/static/javascripts/echarts.min.js"></script>
<script src="/static/javascripts/echarts-gl.min.js"></script>
<script src="https://cn-assets.gitee.com/assets/skill_radar/rep_compass_chart-a170f1ecfff8cd448229c0a3b82b074a.js"></script>

</div>
</div>
<div class='side-item contrib' data-url='/wangerzi/layui-excel/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/wangerzi/layui-excel/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/wangerzi/layui-excel/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<div class='ui modal tiny' id='edit-project-description'>
<i class='iconfont icon-close close'></i>
<div class='header'>编辑仓库简介</div>
<div class='content'>
<div class='item mb-2'>
<div class='title label'>简介内容</div>
<div class='ui small input'>
<textarea maxlength='200' name='project[description]' placeholder='描述' rows='5'>简单快捷的导出插件，导出仅需一句话</textarea>
</div>
</div>
<div class='item mb-2'>
<div class='title label'>主页</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text' value='http://excel.wj2015.com'>
</div>
</div>
</div>
<div class='actions'>
<button class='ui button blank cancel'>取消</button>
<button class='ui button orange btn-save'>保存更改</button>
</div>
</div>

<style>
  #license-popup {
    color: #005980;
    cursor: pointer; }
</style>
<script>
  window.gon.projectRightSide = {
    homepage: "http://excel.wj2015.com",
    description: "简单快捷的导出插件，导出仅需一句话",
    url: '/wangerzi/layui-excel/update_description',
    i18n: {
      invalidHomepage: '不是有效的 http 地址',
      descriptionLimitExceeded: '简介长度不得超过%{limit}个字符',
      noDescription: '暂无描述',
      noPermission: '无权限操作！',
      requestError: '修改发生错误，请稍后重试！'
    }
  }
  window.gon.cloneArrSelectedLabel = [] || []
  $(function () {
    var $editModal = $('#edit-project-description')
    $editModal.modal({
      onShow: function () {
        window.globalUtils.getFocus($editModal.find('textarea'))
      }
    })
    $('.project__right-side').on('click', '.header .btn-edit', function () {
      $editModal.modal('show')
    })
    $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
  
    $('.js-project-label_show').projectLabel({
      i18n: {
        empty: "标签名不能为空",
        verify: "标签名只允许包含中文、字母、数字或者中划线(-)，不能以中划线开头，且长度少于35个字符",
        max: "最多选择 5 个标签"
      }
    })
  })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>
<script>
  function scrollToReadmeBox() {
    var readmeBox = document.getElementById('git-readme');
    if (readmeBox) {
      const topPos = readmeBox.offsetTop;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }
  $(".box-licence").click(function(event) {
    $('.lisence-content').show()
    $('.lisence-edit').show()
    $('.readme-content').hide()
    $('.readme-edit').hide()
    $('.file_title_license').addClass('active-title')
    $('.file_title_readme').removeClass('active-title')
    scrollToReadmeBox()
  });
</script>
<script src="/static/javascripts/file-icons.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/gitee-linker.b5c93d77567006097fca.js"></script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/wangerzi/layui-excel/alipay',
      wepayUrl: '/wangerzi/layui-excel/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension lang'>JavaScript</div>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/wangerzi/layui-excel.git</div>
<div class='extension ssh'>git@gitee.com:wangerzi/layui-excel.git</div>
<div class='extension namespace'>wangerzi</div>
<div class='extension repo'>layui-excel</div>
<div class='extension name'>layui-excel</div>
<div class='extension branch'>master</div>
</div>
<style>
  .gfm-team_member[data-username="yuda-da"] {
    padding: 0 4px;
    background: rgba(44,126,248,0.10);
    border-radius: 2px;
  }
</style>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/wangerzi/layui-excel/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</a></div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='eight wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee_reward">Gitee Reward</a>
</div>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
<div class='item'>
<a class="item" href="https://gitee.com/features/gitee-go">Gitee 持续集成</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="https://help.gitee.com">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/help/articles/4378">更新日志</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
</div>
</div>
<div class='eight wide column right aligned followus git-footer-right'>
<div class='qrcode pre-box mr-1'>
<img class="mjc-qr" src="https://cn-assets.gitee.com/assets/mjc_ip@2x-42c8d21ed1a7027b083d7457a6cf5b8a.png" alt="Mjc ip@2x" />
<div class='qrcode-box customer_service'>
<img alt="售前咨询客服" src="https://cn-assets.gitee.com/assets/QR@2x-5a3f4a6d99fb8d31cc6ef3be028abc8c.png" />
</div>
<p class='mt-1 mini_app-text'>售前咨询客服</p>
</div>
<div class='qrcode mr-1'>
<div class='qrcode-box'>
<img alt="技术交流QQ群" src="https://cn-assets.gitee.com/assets/contact_qr-5e2c2a8da453396590e56a545bce4974.jpg" />
</div>
<p class='mt-1 mini_app-text'>技术交流QQ群</p>
</div>
<div class='qrcode'>
<div class='qrcode-box'>
<img alt="微信服务号" class="weixin-qr" src="https://cn-assets.gitee.com/assets/qrcode-weixin@2x-b74cc97a2ea80123ea53a737f709836d.png" />
</div>
<p class='mt-1 weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'></div>
<div class='item mail-and-zhihu'>
<a rel="nofollow" href="mailto: client@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>client#oschina.cn</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>企业版在线使用：400-606-0201</span>
</a>
</div>
<div class='item tel'>
<a class='d-flex'>
<i class='iconfont icon-tel mt-05 mr-05'></i>
<span>专业版私有部署：</span>
<div>
<div>13670252304</div>
<div>13352947997</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img class="logo-openatom mr-1" alt="开放原子开源基金会" src="https://cn-assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a target="_blank" rel="nofollow" href="https://www.openatom.org/">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img class="report-12377__logo mr-1" alt="违法和不良信息举报中心" src="https://cn-assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a target="_blank" rel="nofollow" href="https://12377.cn">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a rel="nofollow" href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>

<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://cn-assets.gitee.com/webpacks/popover_card-d759637c3dbef944c008.bundle.js"></script>
<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/webpacks/css/gitee_nps-ae0dbee40f6ddc72015a.css" />
<script src="https://cn-assets.gitee.com/webpacks/gitee_nps-fb459ed1da83f9bc24dc.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/gitee_icons-a30057b5990085b2c57b.bundle.js"></script>



<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form class="toolbar-help-search-form" action="/help/load_keywords_data" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" title="Git 命令在线学习" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " title="如何在 Gitee 导入 GitHub 仓库" href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4354">将 PHP 项目自动发布到 packagist.org</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'></div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (true) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='ui popup dark left center transition hidden js-feedback-popup'>发送反馈</div>
<div class='button' id='feedback-btn'>
<i class='iconfont icon-feedback'></i>
</div>
<div class='popup button' id='project-user-message'>
<i class='iconfont icon-message'></i>
</div>
<div class='ui popup dark'>给仓库拥有者发送私信</div>
<div class='popup button' id='home-comment'>
<i class='iconfont icon-comment'></i>
</div>
<div class='ui popup dark'>评论</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='ui modal tiny form' id='send-message-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>发送私信</div>
<div class='content'>
<div class='ui message hide'></div>
<div class='field'>
<textarea class='content-input' maxlength='255' placeholder='文明发言，真诚提问，请输入要发送的内容'></textarea>
</div>
<div class='field captcha-field'>
<div class='ui input right labeled'>
<input placeholder='请输入验证码' type='text'>
<div class='ui basic label captcha-content'>
<img class='captcha_img'>
</div>
</div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>取消</div>
<div class='ui orange icon button disabled ok'>发送</div>
</div>
</div>
<script>
  var $mountedElem = $('#project-user-message'),
      $messageModal = $('#send-message-modal'),
      $modalTips = $messageModal.find('.message'),
      $contentInput = $messageModal.find('.content-input'),
      $captchaImage = $messageModal.find('.captcha_img'),
      $captchaInput = $messageModal.find('.captcha-field input'),
      $sendMessageBtn = $messageModal.find('.ok.button'),
      messageSending = false
  
  $mountedElem.on('click', function() {
    $captchaImage.trigger('click')
    $messageModal.modal('show')
  })
  
  $messageModal.modal({
    onApprove: function() {
      sendMessage()
      return false
    },
    onHidden: function() {
      $modalTips.hide()
    }
  })
  
  $captchaImage.on('click', function() {
    $captchaInput.val('')
  })
  
  $contentInput.on('change keydown', function(e) {
    var content = $(this).val()
    if ($.trim(content).length == 0) {
      $sendMessageBtn.addClass('disabled')
      return
    }
    $sendMessageBtn.removeClass('disabled')
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 13) {
      $sendMessageBtn.trigger('click')
    }
  })
  
  function sendMessage() {
    if (messageSending) return
    $.ajax({
      url: '/notifications/messages',
      data: {
        link: true,
        content: $contentInput.val(),
        receiver_id: '4967515',
        receiver_username: '',
        captcha: $captchaInput.val()
      },
      type: 'POST',
      dataType: 'JSON',
      beforeSend: function() {
        setSendStatus(true)
      },
      success: function(res) {
        if (res.status != 200) {
          showSendTips(res.message || '可能由于网络原因，留言发送失败，请稍后再试', 'error')
        } else {
          $contentInput.val('')
          showSendTips('私信发送成功')
          setTimeout(function() { $messageModal.modal('hide') }, 500)
        }
        setSendStatus(false)
      },
      error: function(err) {
        try {
          showSendTips(err.responseJSON.message, 'error')
        } catch(e) {
          showSendTips('可能由于网络原因，留言发送失败，请稍后再试', 'error')
        } finally {
          setSendStatus(false)
        }
      }
    })
  }
  
  function showSendTips(text, type) {
    $modalTips.html(text).show()
    if (type == 'error') {
      $modalTips.removeClass('success').addClass('error')
    } else {
      $modalTips.removeClass('error').addClass('success')
    }
  }
  
  function setSendStatus(value) {
    messageSending = value
    if (messageSending) {
      $sendMessageBtn.addClass('loading')
      $contentInput.attr('readonly', true)
    } else {
      $sendMessageBtn.removeClass('loading')
      $contentInput.attr('readonly', false)
    }
  }
</script>

<div class='ui modal small form' id='landing-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信和邮件方式反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，如举报内容涉及 版权/产权 方面问题，请尽可能提供完整证据和材料。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='inline field appeal-file-wrap'>
<label class='left-part appeal-file-text'>
举报材料
</label>
<div id='appeal-file-container'>
<div class='ui fluid action input'>
<input disabled id='appeal-file' placeholder='支持 png/jpg/jpeg/doc/docx/zip/pdf，大小不超过 10M' type='text'>
<div class='ui button'>
<input accept='image/png, image/jpeg, application/pdf, application/msword, aplication/zip, application/vnd.openxmlformats-officedocument.wordprocessingml.document' class='file-upload' type='file'>
浏览...
</input>
</div>
</div>
</div>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok'>
发送
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal'),
      $complaintModal = $('#landing-complaint-modal'),
      $complainType = $complaintModal.find('#appeal-types'),
      $complaintModalTip = $complaintModal.find('.callback-msg'),
      $complaintContent = $complaintModal.find('.appeal-reason'),
      $complaintBtn = $complaintModal.find('.ok.button'),
      complaintSending = false,
      fileObject = '';
  
  $('#appeal-types').dropdown({showOnFocus: false});
  $elm.on('click', function() {
     $.ajax({
      url: "/appeals/fetch_types",
      method: 'get',
      data:{'type': 'project'},
      success:function(data){
      var result = '';
      for(var i=0;i<data.length;i++){
        result = result + "<div class='item' data-value='"+data[i].id+"'>"+data[i].name+"</div>"
      }
      $('#appeal-types .menu').html(result)
    }
    })
    $complaintModal.modal({
      autofocus: false,
      onApprove: function() {
        sendAppeal();
        return false;
      },
      onHidden: function() {
        restoreDefault();
      }
    }).modal('show');
  })
  
  $complaintContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainType.dropdown('get value').length > 0 ) {
      $complaintBtn.removeClass('disabled');
      return;
    }
    $complaintBtn.addClass('disabled');
  })
  
  $('#appeal-file-container .file-upload').on('change', function () {
    var reader = new FileReader();
    fileObject = this.files[0];
    if (fileObject) {
      var fileObjectName = fileObject.name.split('.');
      var fileExt = fileObjectName[fileObjectName.length - 1];
      if (fileObjectName.length < 2 || ['zip', 'png', 'jpg', 'jpeg', 'doc', 'docx', 'pdf'].indexOf(fileExt.toLowerCase()) < 0) {
        fileObject = '';
        $('.file-upload').val('');
        $('.exceeded-size-tip').text("请选择上传 png/jpg/jpeg/doc/docx/zip/pdf 类型的文件").show();
        return;
      }
      if (fileObject.size > 10*1024*1024) {
        fileObject = '';
        $('.file-upload').val('');
        $('.exceeded-size-tip').text("上传文件大小不能超过 10M").show();
        return;
      }
      reader.readAsDataURL(fileObject);
      reader.onload = function() {
        var data = reader.result;
        $('.exceeded-size-tip').text('').hide();
        $('#appeal-file').val(fileObject.name);
      }
    }
  })
  
  $('#appeal-types').dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintContent.val()).length > 0) {
        $complaintBtn.removeClass('disabled');
        return
      }
      $complaintBtn.addClass('disabled');
    }
  })
  
  function restoreDefault() {
    $('#appeal-types').dropdown('restore defaults');
    $('.appeal-reason').val('');
    $('#appeal-file').val('');
    $('.exceeded-size-tip').text('').hide();
    $('#appeal-file-container .file-upload').val('');
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setSendTip(false);
    }, 1500);
  }
  
  function sendAppeal() {
    var appealType = $complainType.dropdown('get value');
    var reason = $complaintContent.val();
    if (complaintSending) {
      return;
    }
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('file', fileObject);
    formData.append('appeal_type', 'Project')
    $.ajax({
      type: 'POST',
      url: "/appeals?target_id=5764157",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setSendTip(true);
          setTimeout(function() {
            $complaintModal.modal('hide');
            restoreDefault();
          }, 3000);
        }
        setSendStatus(false);
      },
      error: function(err) {
        showTips(err.responseJSON.message, 'error');
        setSendStatus(false);
      }
    })
  }
  
  function showTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintBtn.addClass('loading');
      $complaintContent.attr('readonly', true);
      $complainType.attr('readonly', true);
    } else {
      $complaintBtn.removeClass('loading');
      $complaintContent.attr('readonly', false);
      $complainType.attr('readonly', false);
    }
  }
  
  function setSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
</style>
<style>
  #udesk_btn a {
    margin: 0px 20px 217px 0px !important;
  }
  #ent-sale-img-wrap {
    margin: 0px 15px 294px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({
    hasComment: true,
    commentUrl: '/wangerzi/layui-excel#tree_comm_title'
  })
</script>
<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/webpacks/css/side_toolbar_feedback-5dcc1be9cca438cc952f.css" />
<script src="https://cn-assets.gitee.com/webpacks/side_toolbar_feedback-1f9bc4a6213ac171e57b.bundle.js"></script>





<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

<script src="https://cn-assets.gitee.com/assets/bdstatic/app-070a9e339ac82bf2bf7ef20375cd4121.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/build_status-a0b08cd330f9f9ab2e6c.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/scan_status-9d8541af0799261fce2a.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/mermaid_render-a13de7e2b5d6f4663bb5.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/check_runs-8fe2f388fec18d6b424e.bundle.js"></script>
</body>
</html>
