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

  // ==========================================
// REAL GOOGLE IDENTITY SERVICES AUTHENTICATION
// ==========================================
let tokenClient;

function initGoogleAuth() {
  if (typeof google === 'undefined') {
    console.warn('Google SDK still loading...');
    return;
  }

  // NOTE: Replace 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com' with your actual Client ID
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    callback: async (tokenResponse) => {
      if (tokenResponse && tokenResponse.access_token) {
        try {
          // Fetch the user's REAL Google account profile info
          const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`
            }
          });

          const userData = await response.json();
          console.log('Real Authenticated User:', userData);

          // 1. Fill input fields automatically with real Google details
          const identifierInput = document.getElementById('identifier');
          const fullNameInput = document.getElementById('fullName');

          if (identifierInput) identifierInput.value = userData.email;
          if (fullNameInput && userData.name) fullNameInput.value = userData.name;

          // 2. Visual feedback
          submitBtn.disabled = true;
          submitBtnText.textContent = 'Signed in via Google!';

          setTimeout(() => {
            alert(`Welcome, ${userData.name}! Successfully signed in with real Google ID: ${userData.email}`);
            submitBtn.disabled = false;
            submitBtnText.textContent = 'Sign In';
          }, 600);

        } catch (error) {
          console.error('Error fetching real Google profile:', error);
          alert('Failed to retrieve Google profile data.');
        }
      }
    },
  });
}

// Initialize when Google SDK loads
window.addEventListener('load', () => {
  initGoogleAuth();
});

// Click listener to prompt real Google Account selection
const googleBtn = document.getElementById('googleBtn');
if (googleBtn) {
  googleBtn.addEventListener('click', () => {
    if (!tokenClient) {
      initGoogleAuth();
    }
    
    if (tokenClient) {
      // Prompts the official Google account chooser window
      tokenClient.requestAccessToken({ prompt: 'select_account' });
    } else {
      alert('Google Auth SDK is loading or Client ID is missing. See setup steps below.');
    }
  });
}

// ==========================================
// REAL SIGN IN WITH APPLE (AppleID) AUTH
// ==========================================
function initAppleAuth() {
  if (typeof AppleID === 'undefined') {
    console.warn('Apple ID SDK still loading...');
    return;
  }

  // Initialize Apple ID configuration
  AppleID.auth.init({
    clientId: 'com.trackdrive.web', // Replace with your Service ID from Apple Developer
    scope: 'name email',
    redirectURI: 'https://yourdomain.com/auth/apple/callback', // Replace with your callback URL
    state: 'trackdrive_auth_state',
    nonce: 'trackdrive_nonce_token',
    usePopup: true // true opens Apple's official browser pop-up modal
  });
}

// Initialize when page loads
window.addEventListener('load', () => {
  initAppleAuth();
});

// Click listener to prompt real Apple ID modal
const appleBtn = document.getElementById('appleBtn');
if (appleBtn) {
  appleBtn.addEventListener('click', async () => {
    if (typeof AppleID === 'undefined') {
      initAppleAuth();
    }

    try {
      // Triggers Apple's genuine Sign in with Apple modal / FaceID / TouchID dialog
      const data = await AppleID.auth.signIn();
      console.log('Real Authenticated Apple User Data:', data);

      // Extract user info (Apple provides the name/email on first authorization)
      let userEmail = '';
      let userName = '';

      if (data.user) {
        if (data.user.email) userEmail = data.user.email;
        if (data.user.name) {
          userName = `${data.user.name.firstName || ''} ${data.user.name.lastName || ''}`.trim();
        }
      }

      // If user chose "Hide My Email", Apple returns a relay email like: xxxxx@privaterelay.appleid.com
      const identifierInput = document.getElementById('identifier');
      const fullNameInput = document.getElementById('fullName');

      if (identifierInput && userEmail) identifierInput.value = userEmail;
      if (fullNameInput && userName) fullNameInput.value = userName;

      // Provide visual feedback
      submitBtn.disabled = true;
      submitBtnText.textContent = 'Signed in via Apple!';

      setTimeout(() => {
        alert(`Successfully signed in with Apple ID! ${userEmail ? 'Account: ' + userEmail : ''}`);
        submitBtn.disabled = false;
        submitBtnText.textContent = 'Sign In';
      }, 600);

    } catch (error) {
      if (error.error === 'popup_closed_by_user') {
        console.log('User closed Apple Sign In pop-up.');
      } else {
        console.error('Apple Sign-In Error:', error);
        alert('Apple Sign In requires an active Apple Developer Services ID and HTTPS domain.');
      }
    }
  });
}

  // Mobile Drawer Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navDrawer = document.getElementById('navDrawer');

if (mobileMenuBtn && navDrawer) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navDrawer.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);

    // Switch icon between bars and close X
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
      icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  });

  // Close the drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!navDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navDrawer.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    }
  });

  // Close the drawer when clicking any nav link
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });
}
});