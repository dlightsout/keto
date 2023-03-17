const asklist = document.querySelector('.allFavCoins');
const activateNotBtn = document.querySelectorAll('.act-notification-btn');
const deactNotBtn = document.querySelectorAll('.deact-notification-btn');
const rmvFavBtn = document.querySelectorAll('.rmv-btn');

document.addEventListener('DOMContentLoaded', async () =>{
  let response;
  try {
    response = await fetch('/private', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
      console.error('CATCH ERR in private', error);
  }
  //window.location.assign('/private');
})

rmvFavBtn.forEach((el) => {
  el.addEventListener('click', async(event) => {
    event.preventDefault();
    let coinName = event.target.getAttribute('data-coin');
    try {
      let response = await fetch('/private', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symbol: coinName,
        }),
      });
      if (response.status === 200) {
        event.target.parentNode.parentNode.remove()
        console.log("deleted from db")
      }
    } catch (error) {
      console.log(error);
    }
})
})

activateNotBtn.forEach((el) => {
  el.addEventListener('click', async (event) => {
    event.preventDefault();
    let coinName = event.target.getAttribute('data-coin');
    let priceat = event.target.parentNode.firstChild.value;

    try {
      let responseUpdate = await fetch('/private', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notification: true,
          priceat,
          symbol: coinName,
        }),
      });
      if (responseUpdate.status === 200) {
        //event.target.parentNode.parentNode.remove()
        console.log("updated succefull")
      }
    } catch (error) {
      console.log(error);
    }
  });
});

deactNotBtn.forEach((el) => {
  el.addEventListener('click', async (event) => {
    event.preventDefault();
    let coinName = event.target.getAttribute('data-coin');

    try {
      let responseUpdate = await fetch('/private', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notification: false,
          priceat: null,
          symbol: coinName,
        }),
      });
      if (responseUpdate.status === 200) {
        //event.target.parentNode.parentNode.remove()
        console.log("updated succefull")
      }
    } catch (error) {
      console.log(error);
    }
  });
});
