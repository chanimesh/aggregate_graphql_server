module.exports = {
  Query: {
    universities: async (_, __, { dataSources }) =>{
      const brazilUniv = await dataSources.UniversitiesAPI.getUniversitiesOfBrazil();
      const indiaUniv = await dataSources.UniversitiesAPI.getUniversitiesOfIndia();
      return [...brazilUniv, ...indiaUniv]
    },
  },
};
