<template>
  <div id="Manage">
    <el-col class="grid">
        <!-- 查询模块 -->
        <el-input class="addsearch" v-model="input" placeholder="请输入查询姓名" size="normal"></el-input>
        <!-- 查询 -->
        <el-button class="search">查询</el-button>
        <!-- 新增用户信息 -->
        <el-button class="addpeople">新增用户</el-button>
    </el-col>

    <!-- 数据库显示地方 -->
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%;overflow: auto">
      <el-table-column
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <!-- 数据显示模块额外附加 编辑、删除 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="dialogFormVisibleEdit = true;handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="dialogFormVisibleDelete = true;handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>


      <!-- 对应上方编辑操作 -->
      <el-dialog append-to-body title="编辑用户信息" :visible.sync="dialogFormVisibleEdit">
        <el-form :model="updateform" ref="updateform">
          <el-form-item label="id" :label-width="formLabelWidth">
            <el-input v-model="updateform.id" autocomplete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name" :label-width="formLabelWidth" :rules="[{required:true,message:'用户名不能为空'}]">
            <el-input v-model="updateform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" :label-width="formLabelWidth" :rules="[{required:true,message:'年龄不能为空'}]">
            <el-input v-model="updateform.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex" :label-width="formLabelWidth" :rules="[{required:true,message:'性别不能为空'}]">
            <el-input v-model="updateform.sex" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisibleEdit = false; ">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 对应上方删除操作 -->
      <el-dialog
        append-to-body
        title="Warning！"
        :visible.sync="dialogFormVisibleDelete">
        <span>确定要删除这个用户吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleDelete = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisibleDelete = false;">确 定</el-button>
        </span>
      </el-dialog>


    </el-table>
    <!-- 新增用户信息弹窗模块 -->
      <el-dialog title="新增用户信息" :visible.sync="dialogFormVisibleAdd">
          <el-form :model="addform" ref="addform">
              <el-form-item prop="name" label="姓名" :label-width="formLabelWidth" :rules="[{required:true,message:'用户名不能为空'}]">
                <el-input v-model="addform.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="age" label="年龄" :label-width="formLabelWidth" :rules="[{required:true,message:'年龄不能为空'}]">
                <el-input v-model="addform.age" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="sex" label="性别" :label-width="formLabelWidth" :rules="[{required:true,message:'性别不能为空'}]">
                <el-input v-model="addform.sex" autocomplete="off"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisibleAdd = false;">确 定</el-button>
          </div>
      </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formLabelWidth: '120px',
        activeName: 'first',
        tableData: [
            {
                id: 1,
                name: 1,
                age: 1,
                sex:1
            },
            {
                id: 2,
                name: 11212,
                age: 12,
                sex:12
            },
        ],
        input: '',
        dialogFormVisibleAdd: false,
        dialogFormVisibleEdit: false,
        dialogFormVisibleDelete: false,
        addform: {
          name: '',
          age: '',
          sex: '',
        },
        updateform:{
          id: '',
          name: '',
          age: '',
          sex: '',
        },
        deleteName:'',
      };
    }
  }
</script>
<style lang="scss" scoped>
.grid{
    display: flex;
}
.el-input{
    margin-right: 20px;
}
</style>