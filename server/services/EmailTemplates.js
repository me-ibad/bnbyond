const { websiteLink } = process.env;
const { Post, Disease } = require("../model");

async function forgetEmailBody(data) {
  return (
    `
    <p>You have requested to update the password. Here is the verification link its only valid for only 15 minutes. Be quick</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;verification link:</p>
    <p>` +
    data.uniquelink +
    `</p>
    <p><br></p>
   
    `
  );
}

async function verifyEmailBody(data) {
  return `


    <p>Hello!&nbsp;</p>
    <p>&nbsp;Welcome to Bnbyond. Please open the following link in your browser to verify your account. This link will expire in 24 hours.&nbsp;</p>
    <p><br></p>
    <p>Verification Link:</p>
    <p><br></p>

    <p>${data.uniquelink}</p>





    
`;
}

async function welcomeEmailBody(data) {
  return (
    `

    <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>Hi,` +
    data.fname +
    `<br>&nbsp;welcome to Bnbyond!!!  your email has been verified
    
    
    `
  );
}

const ThanksEmailBody = `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body class="jumbotron text-center">
    <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        <p class="lead"><strong>Your Email is now verified </strong>Please login to your Account
        </p>
        <hr>

        <p class="lead">
            <a class="btn btn-primary btn-sm" href="${websiteLink}/auth/signin" role="button">Continue to
                LOGIN</a>
        </p>
    </div>
</body>

</html>`;

async function FacebookShare(data) {
  try {
    const post = await Post.findById({ _id: data })
      .populate({
        path: "means_thearay_id",
        model: "treatment",
      })
      .populate({
        path: "symptons_id",
        model: "disease",
      });

    let url;
    let result;

    if (post.whatHelped === "1" || post.whatHelped === "2") {
      url = `https://xpera.de/account/themaDetail/${post.symptons_id.name.replace(
        /\s/g,
        ""
      )}/${post.means_thearay_id.name.replace(/\s/g, "")}/${post._id}`;

      //// console.log(url);

      result = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta property="og:url"                content="${url}" />
      <meta property="og:type"               content="article" />
      <meta property="og:title"              content="${post.means_thearay_id.name}" />
      <meta property="og:description"        content="${post.own_experience}" />
      <meta property="og:image"              content="https://xpera.de/readfiles/${post.means_thearay_id.image}" />
      
      <script type="text/javascript">   
      function Redirect() 
      {  
          window.location="${url}"; 
      } 
      
      setTimeout('Redirect()', 100);   
  </script>
      
      
      
      </head>
      <body>
      
   
      
      </body>
      </html>
    
      
      
      `;
    } else {
      url = `https://xpera.de/account/themaDetail/${post.symptons_id.name.replace(
        /\s/g,
        ""
      )}/${post.professional_other.name.replace(/\s/g, "")}/${post._id}`;

      result = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta property="og:url"                content="${url}" />
      <meta property="og:type"               content="article" />
      <meta property="og:title"              content="${post.professional_other.name}" />
    
    
      
      <script type="text/javascript">   
      function Redirect() 
      {  
          window.location="${url}"; 
      } 
      
      setTimeout('Redirect()', 100);   
  </script>
      
      
      
      </head>
      <body>
      
    
      
      </body>
      </html>
    
      
      
      `;
    }

    return result;
  } catch (err) {}
}

async function ilnessShare(data) {
  try {
    const post = await Disease.findById({ _id: data });

    let url;
    let result;

    url = `https://xpera.de/account/thema/${post.name.replace(/\s/g, "")}/${
      post._id
    }`;

    //// console.log(url);

    result = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta property="og:url"                content="${url}" />
      <meta property="og:type"               content="article" />
      <meta property="og:title"              content="${post.name}" />
      <meta property="og:description"        content="${post.desc}" />
      <meta property="og:image"              content="https://xpera.de/readfiles/${post.image}" />
      
      <script type="text/javascript">   
      function Redirect() 
      {  
          window.location="${url}"; 
      } 
      
      setTimeout('Redirect()', 100);   
  </script>
      
      
      
      </head>
      <body>
      
   
      
      </body>
      </html>
    
      
      
      `;

    ////  console.log(result);
    return result;
  } catch (err) {}
}

module.exports = {
  forgetEmailBody,
  verifyEmailBody,
  welcomeEmailBody,
  ThanksEmailBody,
  FacebookShare,
  ilnessShare,
};
