(function anonymous(
) {

  try {
    return typeof window !== 'undefined' && this === window;
  } catch(e) {
    return false;
  }

})