pageHeader=document.getElementsByClassName("page-header cf")[0];
showText(2);
ul=document.getElementsByClassName("contact-list")[0];
pagination=document.getElementsByClassName("pagination")[0];



showText(users.length);
var size=users.length/10;
showContacts(0);
addPagination(size+1);


function showContacts(n){
    ul.innerHTML="";
    const modifiedUsers = users.map(user => ({
        ...user,
        email:`${user.name.replace(' ', '.')}@example.com`
    }));
    for(i=n;i<n+10;i++){
        ul.innerHTML+=`<li class=\"contact-item cf\"><div class=\"contact-details\"><img class=\"avatar\" src=\"${modifiedUsers[i].image}"><h3>${modifiedUsers[i].name}</h3><span class=\"email\">${modifiedUsers[i].email}</span></div> <div class=\"joined-details\"><span class=\"date\">Joined ${modifiedUsers[i].joined}</span></div></li>`
    }
}
function addPagination(n){
    pagination.innerHTML="";
    for(i=1;i<=n;i++){
        pagination.innerHTML+=`<li><a href="javascript:showContacts(${i-1}*10);">${i}</a></li>`;
    }
}
function showText(n){
    pageHeader.innerHTML=`<h2>Contacts</h2> <h3>Total: ${n}</h3>`;
}