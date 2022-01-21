let data = {
    "nodes": [
	{
	    "id": "Vectors",
	    "group": 1,
	    "content":  "# Vectors \n A vector is a list of values."
	},

	{
	    "id": "Linear Independence",
	    "group": 1,
	    "content":  "# Linear Independence \n A list of vectors is linearly independent if the only way to create a linear combination equal to zero is to set all constants multiplying the vectors to zero."
	},
	{
	    "id": "Linear Dependence",
	    "group": 1,
	    "content":  "# Linear Dependence \n A list of vectors is linearly dependent if there is a linear combination with not all coefficients equal to 0 that can result in a combination equal to 0."
	},

	{
	    "id": "Linear Combination",
	    "group": 1,
	    "content":  "# Linear Combination \n A linear combination consists of adding scalar multiples of the vectors in your list."
	},

	{
	    "id": "Span",
	    "group": 1,
	    "content":  "# Span \n The span of a list of vectors is the collection of all linear combinations of those vectors."
	},

	{
	    "id": "Bases",
	    "group": 1,
	    "content":  "# Bases \n A basis of V is a list of vectors in V that is linearly independent and spans V."
	},

	{
"id": "Vector Space",
"group": 1,
"content":  "# Vector Space \n A vector space is a collection of vectors that has the following properties: commutativity, associativity, additive identity, additive inverse multiplicative identity, and distributive properties"
	},

	{
"id": "Commutativity",
"group": 1,
"content":  "# Commutativity \n An operation is commutative when a + b = b + a."
	},

	{
"id": "Associativity",
"group": 1,
"content":  "# Associativity \n An operation is associative when (a + b) + c = a + (b + c)."
	},

	{
"id": "Distributivity",
"group": 1,
"content":  "# Distributivity \n An operation is distributive when a * (b + c) = a * b + a * c."
	},

	{
"id": "Additive Identity",
"group": 1,
"content":  "# Additive Identity \n An additive identity is a value x such that y + x = y. "
	},

	{
"id": "Additive Inverse",
"group": 1,
"content":  "# Additive Inverse \n A vector space has an additive inverse if for every x, there is a y where x + y = 0."
	},

	{
"id": "Multiplicative Identity",
"group": 1,
"content":  "# Multiplicative Identity \n A multiplicative identity is a value x such that xy = y. "
	},

	{
"id": "Subspaces",
"group": 1,
"content":  "# Subspaces \n A subspace is a subset of a vector space that itself is also a vector space. "
	},

	{
"id": "Direct Sums",
"group": 1,
"content":  "# Direct Sums \n EMPTY"
	},

	{
"id": "Linear Maps",
"group": 1,
"content":  "# Linear Maps \n EMPTY"
	},

	{
"id": "Matrix Representation of Linear Maps",
"group": 1,
"content":  "# Matrix Representation of Linear Maps \n EMPTY"
	},

	{
"id": "Invertibility",
"group": 1,
"content":  "# Invertibility \n EMPTY"
	},

	{
"id": "Injectivity",
"group": 1,
"content":  "# Injectivity \n EMPTY"
	},

	{
"id": "Surjectivity",
"group": 1,
"content":  "# Surjectivity \n EMPTY"
	},

	{
"id": "Null Space",
"group": 1,
"content":  "# Null Space \n EMPTY"
	},

	{
"id": "Range",
"group": 1,
"content":  "# Range \n EMPTY"
	},

	{
"id": "Communication",
"group": 2,
"content":  "# Communication \n EMPTY"
	},

	{
"id": "If/Only if Proofs",
"group": 2,
"content":  "# If/Only if Proofs \n EMPTY"
	},

	{
"id": "Direct Proofs",
"group": 2,
"content":  "# Direct Proofs \n EMPTY"
	},

	{
"id": "Diagrams",
"group": 2,
"content":  "# Diagrams \n EMPTY"
	},

	{
"id": "Proof by Contradiction",
"group": 2,
"content":  "# Proof by Contradiction \n EMPTY"
	},

	{
	    "id": "Explanation",
	    "group": 2,
	    "content":  "# Explanation \n EMPTY"
	},

	{
"id": "Eigenvalues",
"group": 1,
"content":  "# Eigenvalues \n EMPTY"
	},

	{
"id": "Eigenvectors",
"group": 1,
"content":  "# Eigenvectors \n EMPTY"
	},

	{
"id": "Invariant Subspaces",
"group": 1,
"content":  "# Invariant Subspaces \n EMPTY"
	},

	{
"id": "Determinant",
"group": 1,
"content":  "# Determinant \n "
	},

	{
"id": "Proof by Contrapositive",
"group": 2,
"content":  "# Proof by Contrapositive \n "
	},

	{
"id": "Groups",
"group": 1,
"content":  "# Groups \n "
	},

{
"id": "Matrices",
"group": 1,
"content":  "# Matrices \nMatrices are arrays of numbers. "
	},

{
"id": "Dimension",
"group": 1,
"content":  "# Dimension \nDimension refers to how many vectors are in the basis of a space. "
	},

{
"id": "Unique Additive Identity",
"group": 3,
"content":  "# Unique Additive Identity \nA vector space has a unique additive identity. "
	},

{
"id": "Unique Additive Inverse",
"group": 3,
"content":  "# Unique Additive Inverse \nEach element in a vector space has a unique additive inverse. "
	},

{
"id": "Sum of Subspaces is the Smallest Containing Subspace",
"group": 3,
"content":  "# Sum of Subspaces is the Smallest Containing Subspace \nThe sum of subspaces is the smallest containing subspace. "
	},

{
"id": "Conditions for a Direct Sum",
"group": 3,
"content":  "# Condition for a Direct Sum \nSums of subspaces are a direct sum of and only if the only way to write zero as a sum u_1 through u_m is by taking each u_j equal to zero. "
	},

{
"id": "Direct sum of two subspaces",
"group": 3,
"content":  "# Direct sum of two subspaces \nU+V is a direct sum if and only if U intersect V = 0."
	},

{
"id": "Span is the smallest containing subspace",
"group": 3,
"content":  "# Span is the smallest containing subspace \nThe span of a list of vectors V is the smallest subspace of V containing all the vectors in the list."
	},

{
"id": "Linear Dependence Lemma",
"group": 3,
"content":  "# Linear Dependence Lemma \nIf (v_1,...,v_m) is linearly dependent in V, then there exists j in {2,...m} such that the following hold: \n(a) v_j in span(v_1,…,v_j−1); \n(b) If the jth term is removed from (v_1,…,v_m), the span of the remaining list equals span(v_1,…,v_m)."
	},

{
"id": "Length of Linearly Independent list ≤ length of spanning list",
"group": 3,
"content":  "# Length of Linearly Independent list ≤ length of spanning list \nIn a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors."
	},

{
"id": "Finite-dimensional subspaces",
"group": 3,
"content":  "# Finite-dimensional subspaces \nEvery subspace of a finite-dimensional vector space is finite-dimensional."
	},

{
"id": "Spanning list contains a basis",
"group": 3,
"content":  "# Spanning list contains a basis \nEvery spanning list in a vector space can be reduced to a basis of the vector space."
	},












    ],
    "links": [


	{
"source": "Linear Independence",
"target": "Linear Dependence",
"value": 1,
"Content":  "Linear Independence and Linear Dependence are opposite terms dealing with the same concept of unique information. A Linearly Independent list contains vectors that each provide some form of new information, whereas in a Linearly Dependent list there are vectors that provide only repetitive information: they are in the span of the other vectors."
	},

	{
"source": "Linear Independence",
"target": "Linear Combination",
"value": 1,
"Content":  "The concept of Linear Independence relies on Linear Combinations to define the interactions between vectors. Linear Independence is defined on a Linear Combination of vectors in a list, set to equal zero."
	},

	{
"source": "Linear Dependence",
"target": "Linear Combination",
"value": 1,
"Content":  "The concept of Linear Dependence relies on Linear Combinations to define the interactions between vectors. Linear Dependence is defined on a Linear Combination of vectors in a list, set to equal zero."
	},

	{
"source": "Span",
"target": "Linear Combination",
"value": 1,
"Content":  "The definition of Span relies on Linear Combinations of vectors in a list."
	},

	{
"source": "Bases",
"target": "Linear Independence",
"value": 1,
"Content":  "A key property of a basis is Linear Independence."
	},

	{
"source": "Bases",
"target": "Span",
"value": 1,
"Content":  "One key property of a basis is that it spans the space it is in."
	},

	{
"source": "Vector Space",
"target": "Commutativity",
"value": 1,
"Content":  "Vector Spaces are Commutative."
	},

	{
"source": "Vector Space",
"target": "Associativity",
"value": 1,
"Content":  "Vector Spaces are Associative."
	},

	{
"source": "Linear Combination",
"target": "Vector Space",
"value": 1,
"Content":  "Linear Combinations rely on the properties of a vector space. Specifically, Commutativity, Associativity, and Distributivity."
	},

	{
"source": "Vector Space",
"target": "Distributivity",
"value": 1,
"Content":  "Vector Spaces are Distributive."
	},

	{
"source": "Vector Space",
"target": "Additive Identity",
"value": 1,
"Content":  "Vector Spaces have additive identities."
	},

	{
"source": "Vector Space",
"target": "Multiplicative Identity",
"value": 1,
"Content":  "Vector Spaces have multiplicative identities."
	},

	{
"source": "Communication",
"target": "Explanation",
"value": 1,
"Content":  "Explanation is a subset of Communication."
	},

	{
"source": "Subspaces",
"target": "Direct Sums",
"value": 1,
"Content":  "Direct Sums operate on Subspaces."
	},

	{
"source": "Communication",
"target": "If/Only if Proofs",
"value": 1,
"Content":  "If/Only if Proofs are a form of Communication"
	},

	{
"source": "Linear Independence",
"target": "Direct Proofs",
"value": 1,
"Content":  "Linear Independence can be proven through direct proofs."
	},

	{
"source": "Groups",
"target": "Vector Space",
"value": 1,
"Content":  "Vector Spaces share many properties with Groups."
	},

	{
"source": "Communication",
"target": "Diagrams",
"value": 1,
"Content":  "Diagrams are a method of communication."
	},

	{
"source": "Diagrams",
"target": "Explanation",
"value": 1,
"Content":  "Diagrams are a method of explanation."
	},

	{
"source": "Communication",
"target": "Proof by Contradiction",
"value": 1,
"Content":  "Proof by contradiction is a method of communicating a proof."
	},

	{
"source": "If/Only if Proofs",
"target": "Proof by Contradiction",
"value": 1,
"Content":  "These are both types of proofs."
	},

	{
"source": "Direct Proofs",
"target": "If/Only if Proofs",
"value": 1,
"Content":  "These are both types of proofs."
	},

	{
"source": "Eigenvalues",
"target": "Eigenvectors",
"value": 1,
"Content":  ""
	},

	{
"source": "Vector Space",
"target": "Vectors",
"value": 1,
"Content":  "Vector Spaces contain Vectors."
	},

	{
"source": "Direct Sums",
"target": "If/Only if Proofs",
"value": 1,
"Content":  "Proofs involving direct sums often are If/Only if Proofs."
	},

	{
"source": "Proof by Contrapositive",
"target": "Proof by Contradiction",
"value": 1,
"Content":  "These are both types of proofs."
	},

	{
"source": "Multiplicative Identity",
"target": "Additive Identity",
"value": 1,
"Content":  "These are both identity properties."
	},

	{
"source": "Determinant",
"target": "Invertibility",
"value": 1,
"Content":  "A non-zero determinant mean a matrix is invertible."
	},

	{
"source": "Invertibility",
"target": "Injectivity",
"value": 1,
"Content":  "Invertibility in linear maps requires injectivity."
	},

	{
"source": "Invertibility",
"target": "Surjectivity",
"value": 1,
"Content":  "Invertibility in linear maps requires surjectivity."
	},

	{
"source": "Surjectivity",
"target": "Injectivity",
"value": 1,
"Content":  "Injectivity and Surjectivity are both properties of Linear maps."
	},

	{
"source": "Vectors",
"target": "Linear Independence",
"value": 1,
"Content":  "The property of linear independence is concerned with groups of vectors."
	},

	{
"source": "Vectors",
"target": "Linear Dependence",
"value": 1,
"Content":  "The property of linear dependence is concerned with groups of vectors."
	},

	{
"source": "Vectors",
"target": "Linear Combination",
"value": 1,
"Content":  "A linear combination is an operation involving addition and scalar multiplication of vectors."
	},

	{
"source": "Vectors",
"target": "Bases",
"value": 1,
"Content":  "A basis is made up of vectors."
	},

	{
"source": "Vectors",
"target": "Span",
"value": 1,
"Content":  "Spans include Vectors."
	},

	{
"source": "Vectors",
"target": "Groups",
"value": 1,
"Content":  "Objects in groups can be vectors."
	},

	{
"source": "Null Space",
"target": "Range",
"value": 1,
"Content":  "Null space and range both refer to the output of Linear Transformations."
	},

	{
"source": "Injectivity",
"target": "Null Space",
"value": 1,
"Content":  "Injectivity means the null space is equal to zero."
	},

	{
"source": "Surjectivity",
"target": "Range",
"value": 1,
"Content":  "A Linear Transformation is surjective if the range is equal to V."
	},

	{
"source": "Vectors",
"target": "Subspaces",
"value": 1,
"Content":  "Subspaces contain vectors."
	},

{
"source": "Matrix Representation of Linear Maps",
"target": "Linear Maps",
"value": 1,
"Content":  "Matrix Representations represent linear maps."
	},

{
"source": "Eigenvalues",
"target": "Linear Maps",
"value": 1,
"Content":  ""
	},

{
"source": "Eigenvectors",
"target": "Linear Maps",
"value": 1,
"Content":  ""
	},

{
"source": "Vector Space",
"target": "Additive Inverse",
"value": 1,
"Content":  "Vector spaces must contain additive inverses."
	},

{
"source": "Vector Space",
"target": "Invariant Subspaces",
"value": 1,
"Content":  ""
	},

{
"source": "Vector Space",
"target": "Linear Maps",
"value": 1,
"Content":  "Linear Maps operate on vector spaces."
	},

{
"source": "Linear Maps",
"target": "Injectivity",
"value": 1,
"Content":  "Injectivity is a property of linear maps."
	},

{
"source": "Linear Maps",
"target": "Surjectivity",
"value": 1,
"Content":  "Surjectivity is a property of linear maps."
	},

{
"source": "Linear Maps",
"target": "Invertibility",
"value": 1,
"Content":  "Invertibility is a property of linear maps."
	},

{
"source": "Linear Maps",
"target": "Null Space",
"value": 1,
"Content":  "The null space is the set of vectors that a linear map sends to zero."
	},

{
"source": "Linear Maps",
"target": "Range",
"value": 1,
"Content":  "The range is the set of all vectors a linear map outputs."
	},

{
"source": "Diagrams",
"target": "Determinant",
"value": 1,
"Content":  "Diagrams are useful for explaining determinants."
	},

{
"source": "Diagrams",
"target": "Subspaces",
"value": 1,
"Content":  "Diagrams are useful for explaining subspaces."
	},

{
"source": "Diagrams",
"target": "Null Space",
"value": 1,
"Content":  "Diagrams are useful for explaining the null space."
	},

{
"source": "Diagrams",
"target": "Range",
"value": 1,
"Content":  "Diagrams are useful for explaining the range."
	},

{
"source": "Diagrams",
"target": "Injectivity",
"value": 1,
"Content":  "Diagrams are useful for explaining injectivity."
	},

{
"source": "Diagrams",
"target": "Surjectivity",
"value": 1,
"Content":  "Diagrams are useful for explaining surjectivity."
	},

{
"source": "Subspaces",
"target": "Commutativity",
"value": 1,
"Content":  "Subspaces are commutative."
	},

{
"source": "Subspaces",
"target": "Associativity",
"value": 1,
"Content":  "Subspaces are associative."
	},

{
"source": "Subspaces",
"target": "Distributivity",
"value": 1,
"Content":  "Subspaces are distributive."
	},

{
"source": "Subspaces",
"target": "Additive Identity",
"value": 1,
"Content":  "Subspaces have an additive identity."
	},

{
"source": "Subspaces",
"target": "Multiplicative Identity",
"value": 1,
"Content":  "Subspaces have a multiplicative identity."
	},

{
"source": "Subspaces",
"target": "Additive Inverse",
"value": 1,
"Content":  "Subspaces have additive inverses."
	},

{
"source": "Vector Space",
"target": "Direct Sums",
"value": 1,
"Content":  "Direct sums add to vector spaces."
	},

{
"source": "Matrices",
"target": "Linear Maps",
"value": 1,
"Content":  "Linear Maps can be represented as matrices."
	},

{
"source": "Matrices",
"target": "Matrix Representation of Linear Maps",
"value": 1,
"Content":  "Matrices as representations of Linear Maps."
	},

{
"source": "Matrices",
"target": "Vector Space",
"value": 1,
"Content":  "Matrices can represent elements of vector spaces."
	},

{
"source": "Matrices",
"target": "Subspaces",
"value": 1,
"Content":  "Matrices can represent elements of subspaces."
	},

{
"source": "Matrices",
"target": "Vectors",
"value": 1,
"Content":  "Matrices can represent multiple vectors."
	},

{
"source": "Matrices",
"target": "Determinant",
"value": 1,
"Content":  "The determinant is a property of a matrix."
	},

{
"source": "Matrices",
"target": "Multiplicative Identity",
"value": 1,
"Content":  "Matrices have a multiplicative identity."
	},

{
"source": "Dimension",
"target": "Vector Space",
"value": 1,
"Content":  "Vector spaces have dimensions."
	},

{
"source": "Dimension",
"target": "Subspaces",
"value": 1,
"Content":  "Subspaces have dimensions."
	},

{
"source": "Dimension",
"target": "Bases",
"value": 1,
"Content":  "Bases can be used to define dimension."
	},

{
"source": "Dimension",
"target": "Span",
"value": 1,
"Content":  "Span can be used to define dimension."
	},

{
"source": "Dimension",
"target": "Linear Independence",
"value": 1,
"Content":  "A linearly independent list of the right length is a basis of a space with that many dimensions."
	},

{
"source": "Dimension",
"target": "Direct Sums",
"value": 1,
"Content":  "The dimension of a direct sum is the dimension of each subspace added together."
	},

{
"source": "Linear Maps",
"target": "Associativity",
"value": 1,
"Content":  "Linear maps are associative."
	},

{
"source": "Linear Maps",
"target": "Distributivity",
"value": 1,
"Content":  "Linear maps are distributive."
	},

{
"source": "Null Space",
"target": "Subspaces",
"value": 1,
"Content":  "The null space is a subspace."
	},

{
"source": "Range",
"target": "Subspaces",
"value": 1,
"Content":  "The range is a subspace."
	},

{
"source": "Dimension",
"target": "Invertibility",
"value": 1,
"Content":  "Dimension shows whether vector spaces are isomorphic, which means to have an invertible linear map from one to the other."
	},

{
"source": "Unique Additive Identity",
"target": "Additive Identity",
"value": 1,
"Content":  "Additive identities are unique."
	},

{
"source": "Unique Additive Identity",
"target": "Vector Space",
"value": 1,
"Content":  "Vector spaces have unique additive identities."
	},

{
"source": "Unique Additive Identity",
"target": "Subspaces",
"value": 1,
"Content":  "Subspaces have unique additive identities."
	},

{
"source": "Unique Additive Inverse",
"target": "Additive Inverse",
"value": 1,
"Content":  "Additive inverses are unique."
	},

{
"source": "Unique Additive Inverse",
"target": "Vector Space",
"value": 1,
"Content":  "Each element in a vector space has a unique additive inverse."
	},

{
"source": "Unique Additive Inverse",
"target": "Subspaces",
"value": 1,
"Content":  "Each element in a subspace has a unique additive inverse."
	},

{
"source": "Sum of Subspaces is the Smallest Containing Subspace",
"target": "Subspaces",
"value": 1,
"Content":  "Sums of subspaces operate on subspaces."
	},

{
"source": "Sum of Subspaces is the Smallest Containing Subspace",
"target": "Vector Space",
"value": 1,
"Content":  "Sums of subspaces operate on vector spaces."
	},

{
"source": "Sum of Subspaces is the Smallest Containing Subspace",
"target": "Direct Sums",
"value": 1,
"Content":  "Direct sums are sums of subspaces."
	},

{
"source": "Conditions for a Direct Sum",
"target": "Direct Sums",
"value": 1,
"Content":  "Direct sums."
	},

{
"source": "Conditions for a Direct Sum",
"target": "Linear Independence",
"value": 1,
"Content":  "Both direct sums and linear independence rely on setting a sum to zero."
	},

{
"source": "Direct Sums",
"target": "Linear Independence",
"value": 1,
"Content":  "Both direct sums and linear independence rely on setting a sum to zero."
	},

{
"source": "Direct sum of two subspaces",
"target": "Direct Sums",
"value": 1,
"Content":  "Direct sums."
	},

{
"source": "Direct sum of two subspaces",
"target": "Subspaces",
"value": 1,
"Content":  "The direct sum is summing subspaces."
	},

{
"source": "Direct sum of two subspaces",
"target": "If/Only if Proofs",
"value": 1,
"Content":  "The sum of two subspaces is a direct sum if/only if proof their intersection equals zero."
	},

{
"source": "Span is the smallest containing subspace",
"target": "Subspaces",
"value": 1,
"Content":  "The span of a list of vectors V is the smallest subspace of V containing all the vectors in the list."
	},

{
"source": "Span is the smallest containing subspace",
"target": "Vector Space",
"value": 1,
"Content":  "The span of a list of vectors V is the smallest subspace of V containing all the vectors in the list. V is a vector space"
	},

{
"source": "Span is the smallest containing subspace",
"target": "Span",
"value": 1,
"Content":  "The span of a list of vectors V is the smallest subspace of V containing all the vectors in the list."
	},

{
"source": "Linear Dependence Lemma",
"target": "Linear Dependence",
"value": 1,
"Content":  "The linear dependence lemma relies on a linearly dependent list."
	},

{
"source": "Linear Dependence Lemma",
"target": "Linear Independence",
"value": 1,
"Content":  "The linear dependence lemma relies on the concept of linear dependence and independence."
	},

{
"source": "Length of Linearly Independent list ≤ length of spanning list",
"target": "Linear Independence",
"value": 1,
"Content":  "This concept relies on linear independence."
	},

{
"source": "Length of Linearly Independent list ≤ length of spanning list",
"target": "Span",
"value": 1,
"Content":  "This concept relies on span."
	},

{
"source": "Length of Linearly Independent list ≤ length of spanning list",
"target": "Linear Dependence Lemma",
"value": 1,
"Content":  "This proof relies on the linear dependence lemma."
	},

{
"source": "Finite-dimensional subspaces",
"target": "Dimension",
"value": 1,
"Content":  "This concept relies on dimension."
	},

{
"source": "Finite-dimensional subspaces",
"target": "Subspaces",
"value": 1,
"Content":  "This concept relies on subspaces."
	},

{
"source": "Finite-dimensional subspaces",
"target": "Vector Space",
"value": 1,
"Content":  "This concept relies on vector spaces."
	},

{
"source": "Spanning list contains a basis",
"target": "Span",
"value": 1,
"Content":  "This concept relies on span."
	},

{
"source": "Spanning list contains a basis",
"target": "Bases",
"value": 1,
"Content":  "This concept relies on bases."
	},

{
"source": "Spanning list contains a basis",
"target": "Linear Dependence Lemma",
"value": 1,
"Content":  "The reducing concept in this statement relies on the linear dependence lemma."
	},

{
"source": "Spanning list contains a basis",
"target": "Vector Space",
"value": 1,
"Content":  "This concept relies on vector spaces."
	},

    ]
}







export default data;
