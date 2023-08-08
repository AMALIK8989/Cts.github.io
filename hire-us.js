function showServiceOptions() {
  var checkboxes = serviceOptions.querySelectorAll('input[type="checkbox"]');
  
  if (this.value === '3') {
    serviceOptions.style.display = 'block';
    checkboxes.forEach(function (checkbox, index) {
      checkbox.checked = index < 3;
      checkbox.disabled = false;
    });
    
    // Disable remaining checkboxes if more than three are selected
    var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
      return checkbox.checked;
    }).length;
    
    checkboxes.forEach(function (checkbox) {
      if (checkedCount >= 3 && !checkbox.checked) {
        checkbox.disabled = true;
      }
    });
  } else if (this.value === '2') {
    serviceOptions.style.display = 'block';
    checkboxes.forEach(function (checkbox, index) {
      checkbox.checked = index < 2;
      checkbox.disabled = false;
    });
    
    // Disable remaining checkboxes if more than two are selected
    var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
      return checkbox.checked;
    }).length;
    
    checkboxes.forEach(function (checkbox) {
      if (checkedCount >= 2 && !checkbox.checked) {
        checkbox.disabled = true;
      }
    });
  } else if (this.value === '1') {
    serviceOptions.style.display = 'block';
    checkboxes.forEach(function (checkbox, index) {
      checkbox.checked = index === 0;
      checkbox.disabled = false;
    });
    
    // Disable all checkboxes except the first one
    checkboxes.forEach(function (checkbox, index) {
      if (index !== 0) {
        checkbox.disabled = true;
      }
    });
  } else {
    serviceOptions.style.display = 'none';
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
      checkbox.disabled = false;
    });
  }
}
