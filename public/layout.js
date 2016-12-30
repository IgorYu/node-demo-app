<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title><%= title %></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
  <style>
    body {
      padding-top: 60px;
    }
  </style>
  <link href="bootstrap/css/bootstrap-responsive.css" rel="stylesheet">

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container">
        <a class="brand" href="/">Node.js demo app</a>
        <div class="nav-collapse collapse">
          <ul class="nav">
            <li class="<%= route == '/home' && 'active' || '' %>"><a href="/home">Home</a></li>
            <li class="<%= route == '/about' && 'active' || '' %>"><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <%- body -%>
  </div>

  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="bootstrap/js/bootstrap.js"></script>
</body>
</html>
