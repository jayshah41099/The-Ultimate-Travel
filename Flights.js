function SlideBox(Division)
        {
            $(Division).animate({ left:'100%',
                opacity: '0' }, 5000, function ()
            { SlideBack(Division) });
        }