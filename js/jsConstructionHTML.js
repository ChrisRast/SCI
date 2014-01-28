function buildHTMLDisplayResult(result) {

    var li = $('<li>')
    console.log(result)
    if(result.role === "city"){
        var cityName = $('<h2>').text(result["city.name"])
        var cityCode = $('<p>').text(result["city.code"])
        var cityRegionName = $('<p>').text(result["ity.region.name"])
        li.append(cityName)
        li.append(cityCode)
        li.append(cityRegionName)
        li.appendTo($('.right > ul'))
        console.log('city');  
    }else if(result.role === "audio"){
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        var author = $('<p>').text(result.author)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(duration)
        li.append(author)
        li.appendTo($('.right > ul'))
        console.log("cest audio");
    }else{
        
        console.log("ce'st pas fini");
    }
    
    /*
    }else if(result.role === "video"){
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        var author = $('<p>').text(result.author)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(duration)
        li.append(author)
        li.appendTo($('.right > ul'))
        console.log("cest video");
    
    }else {console.log("chercher l'erreur")}/*
        
        /*
        
        if(result.role === "person"){
    
    }else if(result.role === "video"){
    
    }else if(result.role === "text"){
    
    }else if(result.role === "image"){
    
    }else{
        alert("there is a problem with your index!);
    }*/
    
/*
    switch(result.role){
    case 'city':
        var cityName = $('<h2>').text(result["city.name"])
        var cityCode = $('<p>').text(result["city.code"])
        var cityRegionName = $('<p>').text["result.city.region.name"])
        li.append(cityName)
        li.append(cityCode)
        li.append(cityRegionName)
        li.appendTo($('.right > ul'))
        console.log('city');
        break;
    case "person":
        var lastName = $('<h2>').text(result.lastname)
        var firstName = $('<p>').text(result.firstname)
        var email = $('<p>').text(result.email)
        var adress = $('<p>').text(result.adress)
        var cityCode = $('<p>').text(result["city.code"])
        var cityName = $('<p>').text(result["city.name"])
        li.append(lastName)
        li.append(firstName)
        li.append(email)
        li.append(adress)
        li.append(cityCode)
        li.append(cityName)
        li.appendTo($('.right > ul'))
        break;
    case "audio":
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        var author = $('<p>').text(result.author)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(duration)
        li.append(author)
        li.appendTo($('.right > ul'))
        break;
    case "video":
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        var author = $('<p>').text(result.author)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(duration)
        li.append(author)
        li.appendTo($('.right > ul'))
        break;
    case "text":
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var author = $('<p>').text(result.author)
        var kind = $('<p>').text(result.kind)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(author)
        li.append(kind)
        li.appendTo($('.right > ul'))
        break;
    case "image":
        var title = $('<h2>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var height = $('<p>').text(result.height)
        var width = $('<p>').text(result.width)
        li.append(title)
        li.append(filetype)
        li.append(filesize)
        li.append(id)
        li.append(height)
        li.append(width)
        li.appendTo($('.right > ul'))
        break;

    default:
        var id = $('<p>').text(result.id)
        li.append(id)
        li.appendTo($('.right > ul'))
    }*/
}