function init() 
{
    const content = document.getElementById('container');
    const buttons = content.children;
    for (let i=1; i < buttons.length; ++i) 
    {
        buttons[i].addEventListener('click', ev => 
        {
            document.getElementById('screen').textContent += ev.target.textContent;
        })
    }
}

window.addEventListener('DOMContentLoaded',init);

