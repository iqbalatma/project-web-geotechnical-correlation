<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <h3 class="text-2xl font-bold text-center">Login to your account</h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
            <input type="email" placeholder="Email"
                   class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input type="password" placeholder="Password"
                   class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="flex items-baseline justify-between">

            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              <NuxtLink to="/dashboard">Login</NuxtLink>
            </button>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
async function addCompany(body) {
  const data = await $fetch('http://localhost:8020/api/v1/auth', {
    method: 'POST',
    body: body
  });

  console.log(data);
}

addCompany({
  "email": "superadmin@mail.com",
  "password": "admin",
})

useHead({
  title: "Login"
})
</script>