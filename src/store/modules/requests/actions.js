export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      messsage: payload.messsage
    };
    context.commit('addRequest', newRequest);
  }
};
