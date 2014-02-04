function buildHTMLDisplayResult(result) {
    var list = $('.result > ul')
    var li = $('<li>')
    var picto = $('<img>').addClass('picto')
    if (result.role === "city") {
        var cityName = $('<p>').text(result["city.name"])
        var cityCode = $('<p>').text(result["city.code"])
        var cityRegionName = $('<p>').text(result["city.region.name"])
        picto.attr('src', 'img/pictos/' + result.role + ".gif")
        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Name: ")).append(cityName)
        var data = $('<div>').addClass('data').append($('<label>').text("City code: ")).append(cityCode)
            .append($('<label>').text("City region: ")).append(cityRegionName)
        li.append(title).append(data)
            .appendTo(list)

    } else if (result.role === "audio") {
        var title = $('<p>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        picto.attr('src', 'img/pictos/' + result.role + ".gif")
        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Title: ")).append(title)
            .append($('<label>').text("Type of file: ")).append(filetype)
        var data = $('<div>').addClass('data')
            .append($('<label>').text("Size of file: ")).append(filesize)
            .append($('<label>').text("ID: ")).append(id)
            .append($('<label>').text("Time of the video: ")).append(duration)
        if (result.author) {
            var author = $('<p>').text(result.author)
            data.append($('<label>').text("Author: ")).append(author)
        }
        var url = 'http://comem.trucmu.ch/mrm/medias/' + result.groupname + '/' + result.role + '/' + result.filename
        var link = $('<a>').attr('href', url).text('Download this file')
        var file = $('<div>').addClass('file').append(link)
        li.append(title).append(data).append(file)
            .appendTo(list)

    } else if (result.role === "text") {
        var title = $('<p>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        picto.attr('src', 'img/pictos/' + result.role + ".gif")
        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Title: ")).append(title)
            .append($('<label>').text("Type of file: ")).append(filetype)
        var data = $('<div>').addClass('data').append($('<label>').text("Size of file: ")).append(filesize)
            .append($('<label>').text("ID: ")).append(id)
        if (result.author) {
            var author = $('<p>').text(result.author)
            data.append($('<label>').text("Author: ")).append(author)
        } else if (result.kind) {
            var kind = $('<p>').text(result.kind)
            data.append($('<label>').text("Kind: ")).append(kind)
        }
        var url = 'http://comem.trucmu.ch/mrm/medias/' + result.groupname + '/' + result.role + '/' + result.filename
        var link = $('<a>').attr('href', url).text('Download this file')
        var file = $('<div>').addClass('file').append(link)
        li.append(title).append(data).append(file)
        li.appendTo(list)

    } else if (result.role === "image") {
        var title = $('<p>').text(result.title)
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var height = $('<p>').text(result.height)
        var width = $('<p>').text(result.width)
        picto.attr('src', 'img/pictos/' + result.role + ".gif")

        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Title: ")).append(title)
            .append($('<label>').text("Type of file: ")).append(filetype)
        var data = $('<div>').addClass('data').append($('<label>').text("Size of file: ")).append(filesize)
            .append($('<label>').text("ID: ")).append(id)
            .append($('<label>').text("Height: ")).append(height)
            .append($('<label>').text("width: ")).append(width)
        var url = 'http://comem.trucmu.ch/mrm/medias/' + result.groupname + '/' + result.role + '/' + result.filename
        var link = $('<a>').attr('href', url).text('Download this file')
        var file = $('<div>').addClass('file').append(link)
        li.append(title).append(data).append(file)
        li.appendTo(list)

    } else if (result.role === "person") {
        var lastName = $('<p>').text(result.lastname)
        var firstName = $('<p>').text(result.firstname)
        var email = $('<p>').text(result.email)
        var adress = $('<p>').text(result.adress)
        var cityCode = $('<p>').text(result["city.code"])
        var cityName = $('<p>').text(result["city.name"])
        picto.attr('src', 'img/pictos/' + result.role + ".gif")
        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Lastname: ")).append(lastName)
            .append($('<label>').text("Firstname: ")).append(firstName)
        var data = $('<div>').addClass('data').append($('<label>').text("email: ")).append(email)
            .append($('<label>').text("Adress: ")).append(adress)
            .append($('<label>').text("City Name: ")).append(cityName)
            .append($('<label>').text("City code: ")).append(cityCode)
        li.append(title).append(data)
        li.appendTo(list)

    } else if (result.role === "video") {
        var title = $('<p>')
        if (result.title) {
            title.text(result.title)
        } else {
            title.text(result.id);
        }
        var filetype = $('<p>').text(result.fileformat)
        var filesize = $('<p>').text(result.filesize)
        var id = $('<p>').text(result.id)
        var duration = $('<p>').text(result.duration)
        picto.attr('src', 'img/pictos/' + result.role + ".gif")
        var title = $('<div>').addClass('title').append(picto).append($('<label>').text("Title: ")).append(title)
            .append($('<label>').text("Type of file: ")).append(filetype)
        var data = $('<div>').addClass('data').append($('<label>').text("Size of file: ")).append(filesize)
            .append($('<label>').text("ID: ")).append(id)
            .append($('<label>').text("Time of the video: ")).append(duration)
        if (result.author) {
            var author = $('<p>').text(result.author)
            data.append($('<label>').text("Author: ")).append(author)
        }
        var url = 'http://comem.trucmu.ch/mrm/medias/' + result.groupname + '/' + result.role + '/' + result.filename
        var link = $('<a>').attr('href', url).text('Download this file')
        var file = $('<div>').addClass('file').append(link)
        li.append(title).append(data).append(file)
        li.appendTo(list)

    } else {
        var nullSearch = $('<h2>').text("There is no file about your search")
        li.append(nullSearch).appendTo(list)
    }
}
