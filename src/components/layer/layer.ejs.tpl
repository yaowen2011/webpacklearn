
<div class="layer">
    <div>this is <%= name %>layer </div>
    <ul>
    <% for (var i = 0; i < arr.length; ++i) {%>
        <li><%= arr[i] %></li>
    <% } %>
    </ul>
</div>