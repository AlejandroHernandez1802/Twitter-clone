const routesHandler = (req, res) => {
    
  const url = req.url;

  if(url === "/page1"){
    res.setHeader('Content-Type', "text/html");
    res.write('Page 01');
   return res.end();
  }
  else if(url === "/"){
    res.setHeader('Content-Type', "text/html");
    res.write('Home page');
    return res.end();
  }
  res.setHeader('Content-Type', "text/html");
  res.write('Page not found');
  return res.end();
}

module.exports = routesHandler;