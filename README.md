# simple-bootstrap-alert

Small JavaScript library which allows you to create dynamiccaly alerts based on bootstrap framework.

# Usage

Include the js-files which you can find in the dist folder.

```
<script src="jquery.min.js" type="text/javascript"></script>
<script src="bootstrap.min.js" type="text/javascript"></script>
<script src="simple-bootstra-alert.min.js" type="text/javascript"></script>
```

Next, call the alert function for those items you wish to create alert.

```
$('#alert').alert({
    type: 'success',
    message: 'data saved! Clique in the X to close me!'
});

$('#alert').alert({
    type: 'success',
    message: 'Data saved! Will automatically close!',
    autoClose: {
        enable: true,
        type: 'fade',
        time: 3000
    }
});
```

# Options 

The options that you can set are:

- type: set type of alert. (defaults: success)
- message: set the alert message. (defaults: null)
- autoClose: 
  - enable: enable effect to close the alert automatically (defaults: false)
  - type: set effects to close. Available 'fade' or 'slide' (defaults: fade)
  - time: set time to close (defaults: 300)
