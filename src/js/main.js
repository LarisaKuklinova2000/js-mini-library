import qs from './lib/lib';


qs('button').on('click', function() {
    qs('div').eq(2).toggleClass('active')
});

qs('div').click(function() {
    console.log(qs(this).index());
});

console.log(qs('div').eq(2).find('.some'));

