function GetProducts(){
    let basket=JSON.parse(localStorage.getItem('Wine'))
    let totalPrice=document.querySelector('#totalPrice')
    let count=0;
    document.querySelector('#cartTotal').innerHTML=basket.length
    if (basket.length===0||basket===null) {
      document.querySelector('.empty-cart').classList.remove('d-none')
      document.querySelector('#clearAll').classList.add('d-none')
    } 
    else {
        document.querySelector('.empty-cart').classList.add('d-none')
        document.querySelector('.basketfirst-all').classList.remove('d-none')
        document.querySelector('#clearAll').classList.remove('d-none')
        let html=``
        for (const item of basket) {
            let pr_price=item.Price.slice(1,item.Price.length)
            count+=Number(pr_price*item.Count)
            html+=`
            <tr class="pr-list">
            <td>
              <div class="td-content d-flex justify-content-between align-items-center">
                <div>
                  <img src=${item.Image} alt="">
                </div>
                <div class="w-80prcnt">
                  <a href="">${item.Title}</a>
                  <p class="pr" data-id=${item.ID}>ID:${item.ID}</p>
                </div>
              </div>
            </td>
            <td>${pr_price*item.Count}$</td>
            <td>
              <div class="quantity w-lg-50prcnt w-md-55prcnt w-sm-75prcnt w-80prcnt">
                <a id="decrease"href=""> <i class="bi bi-dash"></i></a>
                <input type="number" min=1 value=${item.Count}>
               <a id="increase" href=""><i class="bi bi-plus"></i></a>
              </div>
            </td>
            <td>
              <span id="delPro"><i class="bi bi-x"></i></span>
            </td>
          </tr>
            `
        }
        totalPrice.innerHTML=`${count.toFixed(2)} $`;
        document.querySelector("#mainTable tbody").innerHTML=html;
        let lists=document.querySelectorAll('.pr-list')
        for (let list of lists) {
            let increase=list.querySelector('#increase')
            let decrease=list.querySelector('#decrease')
            let del=list.querySelector('#delPro')
            let input=list.querySelector('input')
            increase.addEventListener('click',function(e){
                e.preventDefault();
                let l_id=list.querySelector('.pr').getAttribute('data-id')
                let item=basket.find(item=>item.ID===l_id);
                item.Count++
                localStorage.setItem('Wine',JSON.stringify(basket))
                location.reload()
            })
            decrease.addEventListener('click',function(e){
                e.preventDefault();
                let l_id=list.querySelector('.pr').getAttribute('data-id')
                let item=basket.find(item=>item.ID===l_id);
                if (item.Count>1) {
                    item.Count--
                    localStorage.setItem('Wine',JSON.stringify(basket))
                    location.reload()
                } else if(item.Count===1){
                    basket.splice(basket.indexOf(item),1)
                    localStorage.setItem('Wine',JSON.stringify(basket))
                    location.reload()
                }
            })
            del.addEventListener('click',()=>{
                let l_id=list.querySelector('.pr').getAttribute('data-id')
                let item=basket.find(item=>item.ID===l_id);
                basket.splice(basket.indexOf(item),1)
                localStorage.setItem('Wine',JSON.stringify(basket))
                location.reload()
            })
            input.addEventListener('change',()=>{
                let l_id=list.querySelector('.pr').getAttribute('data-id')
                let item=basket.find(item=>item.ID===l_id);
                item.Count=input.value
                localStorage.setItem('Wine',JSON.stringify(basket))
                location.reload()
            })
        }
}
}
GetProducts();

document.querySelector('#clearAll').addEventListener('click',()=>{
    localStorage.removeItem('Wine')
    location.reload()
})

