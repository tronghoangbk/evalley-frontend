<template>
    <div>
        <div class="container-fluid">
            <div class="d-flex flex-md-row flex-column justify-content-between">
                <div class="p-2 bd-highlight">Users List</div>
                <div class="p-2 bd-highlight">Flex item 3</div>
            </div>
            <div class="rounded rounded-3 bg-white p-3">
                <div class="d-flex flex-md-row flex-column">
                    <div class="input-group input-group-sm my-2 w-auto me-auto">
                        <span class="input-group-text"><i class="fas fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search user" aria-label="Username">
                    </div>
                    <button type="button" class="btn btn-sm btn-primary m-2 w-auto"><i class="fas fa-plus"></i> Add user</button>
                </div>
                <div class="table-responsive-sm">
                    <table class="table table-borderless" :style="{minWidth: '600px'}">
                        <thead>
                            <tr class="text-muted fw-bolder fs-6 text-uppercase gs-0">
                              <th scope="col"><input class="form-check-input" type="checkbox" value=""></th>
                              <th scope="col">User</th>
                              <th scope="col">Role</th>
                              <th scope="col">Last login</th>
                              <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in 10">
                                <td scope="row" class="align-middle"><input class="form-check-input" type="checkbox" value=""></td>
                                <td class="align-middle">
                                    <div class="d-flex flex-column">
                                        <a href="/craft/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                                        <span>smith@kpmg.com</span>
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <span class="badge bg-secondary">Customer</span>
                                </td>
                                <td class="align-middle">
                                    <span class="badge bg-light text-dark">5 days ago</span>
                                </td>
                                <td class="align-middle">
                                    <div class="d-flex flex-row">
                                        <button class="btn btn-sm btn-primary mx-1"><i class="fas fa-pen"></i></button>
                                        <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
            </div>
            
        </div>
    </div>
</template>