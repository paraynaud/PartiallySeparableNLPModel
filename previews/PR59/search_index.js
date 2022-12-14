var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [PartiallySeparableNLPModels, ModAbstractPSNLPModels, Utils, Meta, ModPBFGSNLPModels, ModPCSNLPModels, ModPLBFGSNLPModels, ModPLSENLPModels, ModPLSR1NLPModels, ModPSENLPModels, ModPSNLPModels, ModPSR1NLPModels]","category":"page"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.SupportedNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.SupportedNLPModel","text":"Accumulate the supported NLPModels. \n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.ElementFunction","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.ElementFunction","text":"ElementFunction\n\nA type that gathers the information indentifying an element function in a PartiallySeparableNLPModel, and its properties. ElementFunction has fields:\n\ni: the index of the element function;\nindex_element_tree: the index occupied in the element-function vector after the deletion of redundant element functions;\nvariable_indices: list of elemental variables of ElementFunction;\ntype: constant, linear, quadratic, cubic or general;\nconvexity_status: constant, linear, convex, concave or unknown.\n\n\n\n\n\n","category":"type"},{"location":"reference/#NLPModels.grad!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPQNNLPModel{T, S}, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.grad!","text":"g = grad!(nlp, x, g)\n\nEvaluate ∇f(x), the gradient of the objective function at x in place.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.grad!-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.grad!","text":"g = grad!(nlp, x, g)\n\nEvaluate ∇f(x), the gradient of the objective function at x in place.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.grad-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPQNNLPModel{T, S}, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.grad","text":"g = grad(nlp, x)\n\nEvaluate ∇f(x), the gradient of the objective function at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.grad-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.grad","text":"g = grad(nlp, x)\n\nEvaluate ∇f(x), the gradient of the objective function at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPQNNLPModel{T, S}, S, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.hprod!","text":"hprod!(nlp::AbstractPQNNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod!-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}, S, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.hprod!","text":"hprod!(nlp::AbstractPartiallySeparableNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPQNNLPModel{T, S}, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.hprod","text":"hprod!(nlp::AbstractPQNNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}, S, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.hprod","text":"hprod!(nlp::AbstractPartiallySeparableNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.obj-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPQNNLPModel{T, S}, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.obj","text":"f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.obj-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}, S}} where {T, S<:AbstractVector{T}}","page":"Reference","title":"NLPModels.obj","text":"f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.compiled_grad_element_function-Tuple{T} where T","page":"Reference","title":"PartiallySeparableNLPModels.Utils.compiled_grad_element_function","text":"element_gradient_tape = compiled_grad_element_function(element_function::T; ni::Int = length(ExpressionTreeForge.get_elemental_variables(element_function)), type = Float64) where {T}\n\nReturn the elment_gradient_tape::GradientTape which speed up the gradient computation of element_function with ReverseDiff.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.distinct_element_expr_tree-Union{Tuple{T}, Tuple{Vector{T}, Vector{Vector{Int64}}}} where T","page":"Reference","title":"PartiallySeparableNLPModels.Utils.distinct_element_expr_tree","text":"(element_expr_trees, indices_element_tree) = distinct_element_expr_tree(vec_element_expr_tree::Vector{T}, vec_element_variables::Vector{Vector{Int}}; N::Int = length(vec_element_expr_tree)) where {T}\n\nIn practice, there may have several element functions having the same expression tree. distinct_element_expr_tree filters the vector vec_element_expr_tree to return element_expr_trees the distincts element functions. length(element_expr_trees) == M < N == length(vec_element_expr_tree). In addition it returns indices_element_tree, who records the index (1 <= i <= M) related ot the expression tree of each element function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.partitioned_structure-Union{Tuple{G}, Tuple{G, Int64}} where G","page":"Reference","title":"PartiallySeparableNLPModels.Utils.partitioned_structure","text":"partitioneddata_tr_pqn = build_PartitionedDataTRPQN(expr_tree, n)\n\nReturn the structure required to run a partitioned quasi-Newton trust-region method.  It finds the partially-separable structure of an expression tree expr_tree representing f(x) = ∑fᵢ(xᵢ). Then it allocates the partitioned structures required. To define properly the sparse matrix of the partitioned matrix we need the size of the problem: n.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Meta.partitioned_meta-Union{Tuple{T}, Tuple{NLPModels.NLPModelMeta{T, Vector{T}}, PartitionedVectors.PartitionedVector{T}}} where T","page":"Reference","title":"PartiallySeparableNLPModels.Meta.partitioned_meta","text":"meta = partitioned_meta(meta::NLPModels.NLPModelMeta{T, Vector{T}}, x0::PartitionedVector{T})\n\nReturn an NLPModelMeta dedicated to PartitionedVectors, i.e. meta.x0 is a PartitionedVector.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModPBFGSNLPModels.PBFGSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPBFGSNLPModels.PBFGSNLPModel","text":"PBFGSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PBFGSNLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PBFGSNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPCSNLPModels.PCSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPCSNLPModels.PCSNLPModel","text":"PCSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using a PCS Hessian approximation. PCSNLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PCSNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLBFGSNLPModels.PLBFGSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLBFGSNLPModels.PLBFGSNLPModel","text":"PLBFGSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using a PLBFGS Hessian approximation. PLBFGSNLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PLBFGSNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLSENLPModels.PLSENLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLSENLPModels.PLSENLPModel","text":"PLSENLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using a PLSE Hessian approximation. PLSENLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PLSENLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLSR1NLPModels.PLSR1NLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLSR1NLPModels.PLSR1NLPModel","text":"PLSR1NLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using a PLSR1 Hessian approximation. PLSR1NLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PLSR1NLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSENLPModels.PSENLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSENLPModels.PSENLPModel","text":"PSENLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using a PSE Hessian approximation. PSENLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PSENLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSNLPModels.PSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSNLPModels.PSNLPModel","text":"PSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned hessian-vector product. PSNLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PSNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSR1NLPModels.PSR1NLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSR1NLPModels.PSR1NLPModel","text":"PSR1NLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned SR1 Hessian approximation. PSR1NLPModel has fields:\n\nmodel: the original model;\nmeta: gather information about the PSR1NLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nop: the partitioned matrix (main memory cost);\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"#PartiallySeparableNLPModels.jl","page":"Home","title":"PartiallySeparableNLPModels.jl","text":"","category":"section"},{"location":"#Philosophy","page":"Home","title":"Philosophy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The purpose of PartiallySeparableNLPModels.jl is to define automatically partially-separable NLPModels and facilitate the implementation of partitioned quasi-Newton methods.","category":"page"},{"location":"#Compatibility","page":"Home","title":"Compatibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia ≥ 1.6.","category":"page"},{"location":"#How-to-install","page":"Home","title":"How to install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/JuliaSmoothOptimizers/ExpressionTreeForge.jl, https://github.com/JuliaSmoothOptimizers/PartiallySeparableNLPModels.jl\npkg> test PartiallySeparableNLPModels","category":"page"},{"location":"#How-to-use","page":"Home","title":"How to use","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See the tutorial.","category":"page"},{"location":"#Dependencies","page":"Home","title":"Dependencies","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The module uses ExpressionTreeForge.jl to detect the partially-separable structure and PartitionedStructures.jl to allocate partitioned quasi-Newton approximations.","category":"page"},{"location":"#Application","page":"Home","title":"Application","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PartiallySeparableSolvers.jl implements partitioned quasi-Newton trust-region methods from PartitionedDataTRPQN and the PartiallySeparableNLPModels.jl methods.","category":"page"},{"location":"#Bug-reports-and-discussions","page":"Home","title":"Bug reports and discussions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you think you found a bug, feel free to open an issue. Focused suggestions and requests can also be opened as issues. Before opening a pull request, start an issue or a discussion on the topic, please.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you want to ask a question not suited for a bug report, feel free to start a discussion here. This forum is for general discussion about this repository and the JuliaSmoothOptimizers, so questions about any of our packages are welcome.","category":"page"},{"location":"tutorial/#PartiallySeparableNLPModels.jl-Tutorial","page":"Tutorial","title":"PartiallySeparableNLPModels.jl Tutorial","text":"","category":"section"},{"location":"tutorial/#An-NLPModel-exploiting-partial-separability","page":"Tutorial","title":"An NLPModel exploiting partial separability","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl defines a subtype of AbstractNLPModel to exploit automatically the partially-separable structure of fR^n to R","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":" f(x) = sum_i=1^N f_i (U_i x)   f_i  R^n_i to R  U_i in R^n_i times n n_i ll n","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"as a sum of element functions f_i.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl relies on ExpressionTreeForge.jl to detect the partially-separable structure. Then, it defines suitable partitioned structures using PartitionedStructures.jl and PartitionedVectors.jl. Any NLPModels from PartiallySeparableNLPModels.jl rely on PartitionedVector <: AbstractVector instead of Vector. Any model from PartiallySeparableNLPModels.jl may be defined either from a ADNLPModel or a MathOptNLPModel. Let starts with an example using an ADNLPModel (MathOptNLPModel will follow):","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using PartiallySeparableNLPModels, ADNLPModels\n\nfunction example(x)\n  n = length(x)\n  n < 2 && @error(\"length of x must be >= 2\")\n  return sum((x[i] + x[i+1])^2 for i=1:n-1)\nend \nstart_example(n :: Int) = ones(n)\nexample_model(n :: Int) = ADNLPModel(example, start_example(n), name=\"Example \" * string(n) * \" variables\")\n\nn = 4 # size of the problem\nmodel = example_model(n)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and call PSNLPModel <: AbstractPartiallySeparableNLPModel to define a partitioned NLPModel using exact second derivatives:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"psnlp = PSNLPModel(model)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"where psnlp.meta.x0 is a PartitionedVector:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"psnlp.meta.x0","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can apply the usual methods obj and grad, hprod from NLPModels.jl:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels\nx = similar(psnlp.meta.x0)\nx .= 1\nfx = NLPModels.obj(psnlp, x) # compute the objective function","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx = NLPModels.grad(psnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"v = similar(x)\nv .= 1\nhv = NLPModels.hprod(psnlp, x, v)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"fx, gx and hv accumulate contributions from element functions, either its evaluation f_i(U_ix), its gradient nabla f_i(U_ix) or its element Hessian-vector nabla^2 f_i(U_i x) U_i v. You can get the Vector value of gx and hv with ","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Vector(hv)\nVector(gx)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and you can find more detail about PartitionedVectors in PartitionedVectors.jl tutorial.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The same procedure can be applied to MathOptNLPModels:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using JuMP, MathOptInterface, NLPModelsJuMP\n\nfunction jump_example(n::Int)\n  m = Model()\n  @variable(m, x[1:n])\n  @NLobjective(m, Min, sum((x[i] + x[i+1])^2 for i = 1:n-1))\n  evaluator = JuMP.NLPEvaluator(m)\n  MathOptInterface.initialize(evaluator, [:ExprGraph])\n  variables = JuMP.all_variables(m)\n  x0 = ones(n)\n  JuMP.set_start_value.(variables, x0)\n  nlp = MathOptNLPModel(m)\n  return nlp\nend\n\njumpnlp = jump_example(n)\npsnlp = PSNLPModel(jumpnlp)\n\nfx = NLPModels.obj(psnlp, x) # compute the objective function\ngx = NLPModels.grad(psnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/#Partitioned-quasi-Newton-NLPModels","page":"Tutorial","title":"Partitioned quasi-Newton NLPModels","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"A model deriving from AbstractPQNNLPModel<:QuasiNewtonModel allocates storage required for partitioned quasi-Newton updates, which are implemented in PartitionedStructures.jl (see the PartitionedStructures.jl tutorial for more details). There are several variants:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PBFGSNLPModel: every element-Hessian approximation is updated with BFGS;\nPSR1NLPModel: every element-Hessian approximation is updated with SR1;\nPSENLPModel: every element-Hessian approximation is updated with BFGS if the curvature condition holds, or with SR1 otherwise;\nPCSNLPModel: each element-Hessian approximation with BFGS if it is classified as convex, or with SR1 otherwise;\nPLBFGSNLPModel: every element-Hessian approximations is a LBFGS operator;\nPLSR1NLPModel: every element-Hessian approximations is a LSR1 operator;\nPLSENLPModel: by default, every element-Hessian approximations is a LBFGS operator as long as the curvature condition holds, otherwise it becomes a LSR1 operator.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"pbfgsnlp = PBFGSNLPModel(jumpnlp)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The Hessian approximation of each element function f_i (y) = (y_1 + y_2)^2 is initially set to an identity matrix.  The contribution of every element Hessian approximation is accumulated as","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"left \nbeginarrayccc\n  left ( beginarraycc\n    1  \n     1  \n  endarray right )   \n   0  \n    0 \nendarray\nright  \n+ \nleft \nbeginarrayccc\n  0   \n   left ( beginarraycc\n    1  \n     1  \n  endarray right )  \n    0 \nendarray\nright \n+ \nleft \nbeginarrayccc\n  0   \n   0  \n    left ( beginarraycc\n    1  \n     1  \n  endarray right )\nendarray\nright ","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The accumulated matrix can be visualized with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Matrix(pbfgsnlp.op)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can update the partitioned quasi-Newton approximation with the pair y,s:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"s = similar(x)\ns .= 0.5\ny = grad(pbfgsnlp, x+s) - grad(pbfgsnlp, x)\npush!(pbfgsnlp, y, s)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and you can perform a partitioned-matrix-vector product with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Bv = similar(x; simulate_vector=false)\nhprod!(pbfgsnlp, x, s, Bv)\nVector(Bv)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Again, see the PartitionedVectors.jl's tutorial to understand both usages of PartitionedVectors.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Finally, you can build a TrunkSolver (from JSOSolvers) from a PartiallySeparableNLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using JSOSolvers\n\ntrunk_solver = TrunkSolver(pbfgsnlp)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"which define properly the PartitionedVectors mandatory for running trunk turnk_solver can be solve afterward with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"solve!(trunk_solver, pbfgsnlp)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"For now, TrunkSolver is the sole Solver defined for PartiallySeparableNLPModels, if you want to add another Solver, you should define it similarly to TrunkSolver in src/trunk.jl.","category":"page"}]
}
