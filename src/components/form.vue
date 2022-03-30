<template>
  <div id="main">
    <div class="signup">
      <form>
        <label for="" aria-hidden="true" id="label">Welcome</label>
        <input
          type="text"
          name="text"
          placeholder="Enter Your Firstname.."
          required
        />
        <input
          type="text"
          name="text"
          placeholder="Enter Your Lasttname.."
          required
        />
        <input type="text" name="age" placeholder="Enter Your Age.." required />
        <input
          type="text"
          name="text"
          placeholder="Enter Your National code.."
          required
        />
        <button class="btn d-block mx-auto px-5" id="signup-btn">
          sign up
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#main {
  background: linear-gradient(-180deg, #7aaddd 0%, #386092 98%),
    radial-gradient(
      at top left,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: screen;
  width: 350px;
  height: 550px;
  border-radius: 15px;
  box-shadow: 5px 20px 50px #000;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
#label {
  color: #004085;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 85%;
  height: 20px;
  background: #fff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 20px 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 14px 12px;
}
#signup-btn {
  background-color: #004085;
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-top: 50px;
}
#signup-btn:hover{
  color: #004085;
  background-color: white;
  transition: .9s;
  font-weight: 600;
}
::placeholder{
  font-size: 14px;
}
</style>