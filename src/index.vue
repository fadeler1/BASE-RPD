<template>
  <div>
    <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/RPD/login">Login</router-link> |
    <router-link to="/RPD">Home</router-link>
  </p>
    <img src="./assets/MicrosoftTeams-image.png" height="200" target="_blanck" /> 
    <router-view></router-view>
  </div>
</template>

