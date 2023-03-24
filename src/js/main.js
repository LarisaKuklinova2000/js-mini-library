import './lib/lib';


qs('button').on('click', function() {
    qs('div').eq(2).toggleClass('active')
});

