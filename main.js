const fileExit ='.png';

let db =[
    {
        name:'Пласкогубці',
        id:'00001',
        pic:'00001'+ fileExit
    },
    {
        name:'Молоток',
        id:'00002',
        pic:'00002'+ fileExit
    },
    {
        name:'Викрутка',
        id:'00003',
        pic:'00003'+ fileExit
    },
    {
        name:'Пила',
        id:'00004',
        pic:'00004'+ fileExit
    },
    {
        name:'Рулетка',
        id:'00005',
        pic:'00005'+ fileExit
    },
    {
        name:'Степлер',
        id:'00006',
        pic:'00006'+ fileExit
    },
    {
        name:'Кліщі',
        id:'00007',
        pic:'00007'+ fileExit
    },
    {
        name:'Кувалда',
        id:'00008',
        pic:'00008'+ fileExit
    }
];


for(let el of db){
$('.productContainer').append(`<div id="code${el.id}" class="productItem"  style="background-image:url(./img/${el.pic})">
<div>${el.name}</div>
<div>${el.id}</div>
</div>`);
}

$('.productItem').click(function(e){
    if(e.target.id){
        let targetEl = (e.target.id).substr(4);
        console.log(targetEl)
    }
})
let productList = [];

$('.productItem').click(function(e){
    if(e.target.id){
        let targetEl = (e.target.id).substr(4);
        for(let el of db){
            if(el.id == targetEl){
                productList.push(el.name);
            }
        }
       $('.buttonOval').text(productList.length);
    }
})
$('.topButton').click(function(){
    if(productList.length>0){
    $('.wrap').css('filter','blur(10px)');
    $('.productCheck').css('display','flex');
    $('.productCheck').css('display','checkContainer');
    }
    for(let el of productList){
        $('.summaryContainer').append(`<dix>${el}</div>`);
    }
})
$('.productCheckExit').click(function(){
    $('.wrap').css('filter','blur(0)');
    $('.productCheck').css('display','none');
})
$('.tools').click(function(){
$('.tools').css('display','none');
$('.productContainer').css('display','flex');
$('.BuildingMaterial').css('display','none');
})
$('.BuildingMaterial').click(function(){
    $('.tools').css('display','none');
    $('.BuildingMaterial').css('display','none');
    $('.BuildingMaterialContainer').css('display','flex')
    })