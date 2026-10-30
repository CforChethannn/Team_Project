document.addEventListener('DOMContentLoaded', () => {
  const tabSignIn = document.getElementById('tabSignIn');
  const tabCreateAccount = document.getElementById('tabCreateAccount');
  const navLoginBtn = document.getElementById('navLoginBtn');
  const navSignUpBtn = document.getElementById('navSignUpBtn');
  
  const formTitle = document.getElementById('formTitle');
  const formSub = document.getElementById('formSub');
  const submitBtnText = document.getElementById('submitBtnText');
  const submitBtn = document.getElementById('submitBtn');
  
  const fullNameGroup = document.getElementById('fullNameGroup');
  const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
  const forgotPasswordRow = document.getElementById('forgotPasswordRow');
  const authBottomPrompt = document.getElementById('authBottomPrompt');
  
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const authForm = document.getElementById('authForm');
  const googleBtn = document.getElementById('googleBtn');
  const appleBtn = document.getElementById('appleBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  let isSignUpMode = false;

  function switchMode(toSignUp) {
    isSignUpMode = toSignUp;

    if (isSignUpMode) {
      tabCreateAccount.classList.add('active');
      tabSignIn.classList.remove('active');

      formTitle.textContent = 'Create TrackDrive Account';
      formSub.textContent = 'Join thousands of verified shippers & drivers today.';

      fullNameGroup.style.display = 'block';
      confirmPasswordGroup.style.display = 'block';
      forgotPasswordRow.style.display = 'none';

      submitBtnText.textContent = 'Create Account';
      authBottomPrompt.innerHTML = `Already have an account? <a href="#signin" id="inlineToggleLink">Sign In <i class="fa-solid fa-arrow-right-long"></i></a>`;
    } else {
      tabSignIn.classList.add('active');
      tabCreateAccount.classList.remove('active');

      formTitle.textContent = 'Sign In to TrackDrive';
      formSub.textContent = 'Access your dashboard and manage your logistics with ease.';

      fullNameGroup.style.display = 'none';
      confirmPasswordGroup.style.display = 'none';
      forgotPasswordRow.style.display = 'flex';

      submitBtnText.textContent = 'Sign In';
      authBottomPrompt.innerHTML = `Don't have an account? <a href="#signup" id="inlineToggleLink">Sign Up <i class="fa-solid fa-arrow-right-long"></i></a>`;
    }

    const dynamicLink = document.getElementById('inlineToggleLink');
    if (dynamicLink) {
      dynamicLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchMode(!isSignUpMode);
      });
    }
  }

  if (tabSignIn && tabCreateAccount) {
    tabSignIn.addEventListener('click', () => switchMode(false));
    tabCreateAccount.addEventListener('click', () => switchMode(true));
  }

  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode(false);
      document.querySelector('.right-form-panel').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (navSignUpBtn) {
    navSignUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode(true);
      document.querySelector('.right-form-panel').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const initialInlineLink = document.getElementById('inlineToggleLink');
  if (initialInlineLink) {
    initialInlineLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode(true);
    });
  }

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      
      const icon = togglePassword.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      }
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = document.getElementById('identifier').value.trim();
      const currentLabel = submitBtnText.textContent;

      submitBtn.disabled = true;
      submitBtnText.textContent = isSignUpMode ? 'Creating account...' : 'Signing in...';

      setTimeout(() => {
        alert(`${isSignUpMode ? 'Account created' : 'Logged in'} successfully for: ${identifier}`);
        submitBtn.disabled = false;
        submitBtnText.textContent = currentLabel;
      }, 700);
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      alert(`Continue with Google (${isSignUpMode ? 'Create Account' : 'Sign In'})`);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      alert(`Continue with Apple (${isSignUpMode ? 'Create Account' : 'Sign In'})`);
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      alert('Mobile menu toggled.');
    });
  }
});