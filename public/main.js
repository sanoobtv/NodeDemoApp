var update = document.getElementById('update')


update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
  })
  window.location.reload()
})
	
	function delfunction(id)
	{
		alert(id)
fetch('quotes', {
method: 'delete',
headers: {'Content-Type':'application/json'},
body: JSON.stringify({
	'_id': id

})
})

	.then (res => {
	 if(res.ok) return res.json() 
	})
	.then(data => { 
		console.log(data)
				
})
window.location.reload()
	}