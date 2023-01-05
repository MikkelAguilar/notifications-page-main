updateNotifications()

function updateNotifications() {
    var unread = document.getElementsByClassName('unread')
    var noOfNotifs = document.getElementById('numberOfNotifications')

    if (unread.length <= 0) {
        noOfNotifs.style.visibility = 'hidden'
    }
    else {
        noOfNotifs.innerText = unread.length
    }
    updateNotificationIndicator()
}

function updateNotificationIndicator() {
    var unread = document.getElementsByClassName('notificationContainer__notification')

    for (var i = 0; i < unread.length; i++) {
        if (unread[i].classList.contains('unread')) {
            unread[i].children[1].children[0].children[1].style.display = 'inline-block'
        }
        else {
            unread[i].children[1].children[0].children[1].style.display = 'none'
        }
    }

}

function markRead() {
    const notifications = document.getElementsByClassName("notificationContainer__notification")

    for (var i = 0; i < notifications.length; i++) {
        if (notifications[i].classList.contains('unread')) {
            notifications[i].style.background = "white"
            notifications[i].classList.remove('unread')
        }
    }

    updateNotifications()
    console.log(notifications.length)
}