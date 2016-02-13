# Technical Test For Checkout.com - Gulp
Technical Test For Checkout.com - Gulp

### Prerequisites

You need npm : https://www.npmjs.com/package/download

### How it works ?

```
git clone https://github.com/guillaumeteillet/technicalTestForCheckoutComGulp.git gulp
cd gulp/files
npm install
./node_modules/gulp/bin/gulp.js DoWork
```

Now, you can open index.html

### Why ./node_modules/gulp/bin/gulp.js and not gulp ? 

Because when you run npm install, you install gulp locally. If you want to install gulp globally, you need to run :

```
npm install -g gulp
```
